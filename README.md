# 🎰 Xổ Số Miền Bắc - Flask Web Application

Ứng dụng web hiển thị kết quả xổ số Miền Bắc với giao diện đẹp mắt, lấy dữ liệu trực tiếp từ Minh Ngọc.

## 📋 Tính năng

- ✅ Scraping tự động kết quả XSMB từ Minh Ngọc
- ✅ Giao diện đẹp với Bootstrap 5 và hiệu ứng gradient
- ✅ Responsive design - tương thích mọi thiết bị
- ✅ Xử lý lỗi thông minh khi không lấy được dữ liệu
- ✅ Nút làm mới để cập nhật kết quả mới nhất

## 🚀 Cài đặt

### 1. Cài đặt Python Dependencies

```bash
cd lottery-web
pip install -r requirements.txt
```

### 2. Chạy ứng dụng

```bash
python app.py
```

### 3. Truy cập website

Mở trình duyệt và truy cập:
```
http://127.0.0.1:5000
```

## 📁 Cấu trúc thư mục

```
lottery-web/
├── app.py                 # Flask application + scraping logic
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # HTML template với Bootstrap 5
└── README_FLASK.md       # Hướng dẫn này
```

## 🛠️ Công nghệ sử dụng

- **Backend**: Flask (Python web framework)
- **Scraping**: BeautifulSoup4 + Requests
- **Frontend**: HTML5 + Bootstrap 5 + Custom CSS
- **Template Engine**: Jinja2

## 🎨 Tính năng giao diện

- Gradient background với màu tím đẹp mắt
- Card design hiện đại với shadow và border-radius
- Hover effects trên mỗi dòng giải thưởng
- Giải đặc biệt và giải nhất có màu nổi bật riêng
- Animation fadeIn khi tải trang
- Responsive cho mọi kích thước màn hình

## ⚙️ Cấu hình

Mặc định ứng dụng chạy ở:
- **Host**: 127.0.0.1 (localhost)
- **Port**: 5000
- **Debug mode**: Enabled (tự động reload khi code thay đổi)

Để thay đổi, sửa trong `app.py`:
```python
app.run(debug=True, host='127.0.0.1', port=5000)
```

## 🔧 Xử lý lỗi

- Nếu không kết nối được Minh Ngọc → Hiển thị thông báo "Hệ thống đang bảo trì"
- Nếu parse HTML thất bại → Hiển thị thông báo lỗi
- Có nút "Tải lại trang" để thử lại

## 📝 Lưu ý

- Kết quả chỉ mang tính chất tham khảo
- Dữ liệu được lấy từ Minh Ngọc
- Cần kết nối internet để scraping dữ liệu

## 🎯 Phát triển thêm

Có thể mở rộng:
- Thêm caching để giảm số lần request
- Thêm lịch sử kết quả
- Thêm thông báo real-time
- Lưu kết quả vào database
- Thêm API endpoint

## 📞 Hỗ trợ

Nếu gặp lỗi, kiểm tra:
1. Đã cài đặt đúng dependencies chưa
2. Kết nối internet có hoạt động không
3. Website Minh Ngọc có đang maintenance không

## 📜 License

Dữ liệu thuộc về Minh Ngọc (https://www.minhngoc.net.vn)
