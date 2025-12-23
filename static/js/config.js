/**
 * Sidebar Configuration
 * Config-driven approach for managing sidebar links and widgets
 */

const sidebarConfig = {
    // Left Sidebar - Navigation & Quick Links
    left: {
        widgets: [
            {
                id: 'navigation',
                title: '📍 Menu Điều Hướng',
                type: 'links',
                items: [
                    { icon: '🏠', text: 'Trang chủ', url: '/', description: 'Về trang chủ' },
                    { icon: '🌴', text: 'Miền Nam', url: '#mien-nam', description: 'Xem kết quả Miền Nam' },
                    { icon: '🏖️', text: 'Miền Trung', url: '#mien-trung', description: 'Xem kết quả Miền Trung' },
                    { icon: '🏛️', text: 'Miền Bắc', url: '#mien-bac', description: 'Xem kết quả Miền Bắc' }
                ]
            },
            {
                id: 'tools',
                title: '🛠️ Công cụ',
                type: 'links',
                items: [
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                ]
            }
        ]
    },

    // Right Sidebar - Useful Links & Info
    right: {
        widgets: [
            {
                id: 'external-links',
                title: '🔗 Liên kết hữu ích',
                type: 'links',
                items: [
                    { icon: '🌐', text: 'Minh Ngọc', url: 'https://www.minhngoc.net.vn', external: true },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                    { icon: '🌐', text: 'Quảng cáo', url: '#community' },
                ]
            }
        ]
    }
};

// Footer Configuration
const footerConfig = {
    sections: [
        {
            title: '📍 Về chúng tôi',
            type: 'text',
            content: 'Website cung cấp kết quả xổ số 3 miền (Bắc, Trung, Nam) nhanh chóng và chính xác từ nguồn Minh Ngọc.',
            extra: '<strong>Cập nhật:</strong> Hàng ngày'
        },
        {
            title: '🔗 Liên kết',
            type: 'links',
            items: [
                { text: 'Trang chủ', url: '/' },
                { text: 'Minh Ngọc', url: 'https://www.minhngoc.net.vn', external: true },
                { text: 'Thống kê', url: '#stats' },
                { text: 'Dự đoán XS', url: '#predict' }
            ]
        },
        {
            title: '📱 Kết nối',
            type: 'links',
            items: [
                { text: 'Facebook', url: '#fb' },
                { text: 'Zalo', url: '#zalo' },
                { text: 'Telegram', url: '#tg' },
                { text: 'Email: contact@xoso3mien.vn', url: 'mailto:contact@xoso3mien.vn' }
            ]
        },
        {
            title: '⚠️ Lưu ý',
            type: 'text',
            content: 'Kết quả xổ số chỉ mang tính chất tham khảo. Vui lòng đối chiếu với kết quả chính thức.',
            extra: '<strong>Nguồn:</strong> Minh Ngọc'
        }
    ],
    copyright: '© 2025 Xổ Số 3 Miền. All rights reserved.',
    tagline: 'Designed with ❤️ for Vietnamese lottery enthusiasts'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sidebarConfig, footerConfig };
}
