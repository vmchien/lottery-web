"""
Flask Web Application for Vietnamese Lottery Results (All-in-One Dashboard)
Displays all 3 regions (Miền Nam, Miền Trung, Miền Bắc) on a single page
"""

from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import concurrent.futures

app = Flask(__name__)

# Create a session for connection pooling
session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
})


def convert_date_format(html_date):
    """
    Convert HTML5 date format (YYYY-MM-DD) to Minh Ngoc format (DD-MM-YYYY)
    """
    try:
        date_obj = datetime.strptime(html_date, '%Y-%m-%d')
        return date_obj.strftime('%d-%m-%Y')
    except:
        return datetime.now().strftime('%d-%m-%Y')


def fetch_lottery_data(region, date_str):
    """
    Fetch lottery results from Minh Ngoc for specified region and date
    
    Args:
        region (str): 'mien-bac', 'mien-nam', or 'mien-trung'
        date_str (str): Date in DD-MM-YYYY format
        
    Returns:
        list: List of dictionaries containing province lottery data
    """
    url = f"https://www.minhngoc.net.vn/ket-qua-xo-so/{region}/{date_str}.html"
    
    try:
        response = session.get(url, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Parse based on region
        if region == 'mien-bac':
            return parse_mien_bac(soup)
        else:
            return parse_mien_nam_trung(soup)
            
    except Exception as e:
        print(f"Error fetching {region} on {date_str}: {e}")
        return []


def parse_mien_bac(soup):
    """Parse Miền Bắc lottery results"""
    result_table = soup.find('table', class_='bkqmienbac')
    
    if not result_table:
        return []
    
    date_elem = result_table.find('a', href=lambda x: x and '/ket-qua-xo-so/' in x and '.html' in x)
    date_text = date_elem.get_text(strip=True) if date_elem else ''
    
    inner_table = result_table.find('table', class_='bkqtinhmienbac')
    if not inner_table:
        return []
    
    prizes = {}
    prize_mappings = {
        'giaidbl': 'Giải ĐB',
        'giai1l': 'Giải nhất',
        'giai2l': 'Giải nhì',
        'giai3l': 'Giải ba',
        'giai4l': 'Giải tư',
        'giai5l': 'Giải năm',
        'giai6l': 'Giải sáu',
        'giai7l': 'Giải bảy'
    }
    
    for class_name, prize_name in prize_mappings.items():
        prize_cell = inner_table.find('td', class_=class_name)
        if not prize_cell:
            continue
        
        row = prize_cell.find_parent('tr')
        if not row:
            continue
        
        number_cell = row.find('td', class_=class_name.replace('l', ''))
        if not number_cell:
            continue
        
        number_divs = number_cell.find_all('div')
        numbers = [div.get_text(strip=True) for div in number_divs if div.get_text(strip=True)]
        
        if numbers:
            prizes[prize_name] = ' - '.join(numbers)
    
    return [{
        'province': 'Hà Nội',
        'code': 'XSMB',
        'date': date_text,
        'prizes': prizes
    }]


def parse_mien_nam_trung(soup):
    """Parse Miền Nam or Miền Trung lottery results"""
    main_table = soup.find('table', class_='bkqmiennam')
    
    if not main_table:
        return []
    
    results = []
    
    date_cell = main_table.find('td', class_='ngay')
    date_text = date_cell.get_text(strip=True) if date_cell else ''
    
    province_tables = main_table.find_all('table', class_='rightcl')
    
    if not province_tables:
        return []
    
    prize_classes = ['giai8', 'giai7', 'giai6', 'giai5', 'giai4', 'giai3', 'giai2', 'giai1', 'giaidb']
    prize_names = ['Giải 8', 'Giải 7', 'Giải 6', 'Giải 5', 'Giải 4', 'Giải 3', 'Giải 2', 'Giải 1', 'Giải ĐB']
    
    for table in province_tables:
        province_cell = table.find('td', class_='tinh')
        if not province_cell:
            continue
        
        province_name = province_cell.get_text(strip=True)
        
        code_cell = table.find('td', class_='matinh')
        province_code = code_cell.get_text(strip=True) if code_cell else ''
        
        prizes = {}
        
        for prize_class, prize_name in zip(prize_classes, prize_names):
            prize_cell = table.find('td', class_=prize_class)
            if not prize_cell:
                continue
            
            number_divs = prize_cell.find_all('div')
            numbers = [div.get_text(strip=True) for div in number_divs if div.get_text(strip=True)]
            
            if numbers:
                prizes[prize_name] = ' - '.join(numbers)
        
        if prizes:
            results.append({
                'province': province_name,
                'code': province_code,
                'date': date_text,
                'prizes': prizes
            })
    
    return results


def fetch_all_regions(date_str):
    """
    Fetch all 3 regions data simultaneously using ThreadPoolExecutor
    
    Args:
        date_str (str): Date in DD-MM-YYYY format
        
    Returns:
        dict: Dictionary with keys 'mien-nam', 'mien-trung', 'mien-bac'
    """
    regions = ['mien-nam', 'mien-trung', 'mien-bac']
    all_data = {}
    
    # Fetch all regions in parallel
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        future_to_region = {
            executor.submit(fetch_lottery_data, region, date_str): region 
            for region in regions
        }
        
        for future in concurrent.futures.as_completed(future_to_region):
            region = future_to_region[future]
            try:
                all_data[region] = future.result()
            except Exception as e:
                print(f"Error fetching {region}: {e}")
                all_data[region] = []
    
    return all_data


@app.route('/')
def index():
    """
    Main dashboard displaying all 3 regions
    """
    # Get date parameter (default to today)
    html_date = request.args.get('date', datetime.now().strftime('%Y-%m-%d'))
    minh_ngoc_date = convert_date_format(html_date)
    
    # Fetch all regions data
    all_data = fetch_all_regions(minh_ngoc_date)
    
    # Check if any data exists
    has_data = any(len(data) > 0 for data in all_data.values())
    
    return render_template('index.html',
                         all_data=all_data,
                         date=html_date,
                         display_date=minh_ngoc_date,
                         has_data=has_data)


# For Vercel deployment
application = app

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
