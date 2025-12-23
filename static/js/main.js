/**
 * Main JavaScript - Sidebar & Footer Rendering Logic
 * Implements config-driven UI rendering
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    renderSidebars();
    renderFooter();
    initSmoothScroll();
});

/**
 * Render left and right sidebars from config
 */
function renderSidebars() {
    renderSidebar('left', sidebarConfig.left);
    renderSidebar('right', sidebarConfig.right);
}

/**
 * Render a single sidebar
 * @param {string} position - 'left' or 'right'
 * @param {Object} config - Sidebar configuration
 */
function renderSidebar(position, config) {
    const container = document.getElementById(`${position}-sidebar`);
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Render each widget
    config.widgets.forEach(widget => {
        const widgetEl = createWidget(widget);
        container.appendChild(widgetEl);
    });
}

/**
 * Create a widget element
 * @param {Object} widget - Widget configuration
 * @returns {HTMLElement}
 */
function createWidget(widget) {
    const card = document.createElement('div');
    card.className = 'sidebar-card';
    card.id = widget.id;

    // Widget title
    const title = document.createElement('h3');
    title.textContent = widget.title;
    card.appendChild(title);

    // Widget content based on type
    if (widget.type === 'links') {
        const linksList = createLinksList(widget.items);
        card.appendChild(linksList);
    } else if (widget.type === 'custom') {
        const customContent = document.createElement('div');
        customContent.innerHTML = widget.content;
        card.appendChild(customContent);
    }

    return card;
}

/**
 * Create links list
 * @param {Array} items - Link items
 * @returns {HTMLElement}
 */
function createLinksList(items) {
    const ul = document.createElement('ul');
    ul.className = 'sidebar-links';

    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = item.url;
        a.innerHTML = `<span class="icon">${item.icon}</span>${item.text}`;

        if (item.external) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }

        if (item.description) {
            a.title = item.description;
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

/**
 * Render footer from config
 */
function renderFooter() {
    const footerContent = document.getElementById('footer-content');
    const footerBottom = document.getElementById('footer-bottom');

    if (!footerContent || !footerBottom) return;

    // Clear existing content
    footerContent.innerHTML = '';

    // Render each section
    footerConfig.sections.forEach(section => {
        const sectionEl = createFooterSection(section);
        footerContent.appendChild(sectionEl);
    });

    // Render footer bottom
    footerBottom.innerHTML = `
        <p>${footerConfig.copyright}</p>
        <p style="font-size: 0.85rem; margin-top: 5px;">${footerConfig.tagline}</p>
    `;
}

/**
 * Create footer section
 * @param {Object} section - Section configuration
 * @returns {HTMLElement}
 */
function createFooterSection(section) {
    const div = document.createElement('div');
    div.className = 'footer-section';

    // Section title
    const title = document.createElement('h4');
    title.textContent = section.title;
    div.appendChild(title);

    // Section content
    if (section.type === 'text') {
        const p = document.createElement('p');
        p.textContent = section.content;
        div.appendChild(p);

        if (section.extra) {
            const extra = document.createElement('p');
            extra.innerHTML = section.extra;
            div.appendChild(extra);
        }
    } else if (section.type === 'links') {
        const ul = document.createElement('ul');
        section.items.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.text;

            if (item.external) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }

            li.appendChild(a);
            ul.appendChild(li);
        });
        div.appendChild(ul);
    }

    return div;
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Utility: Format number with separator
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Utility: Get current date in Vietnamese format
 */
function getCurrentDateVN() {
    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const now = new Date();
    const dayName = days[now.getDay()];
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    return `${dayName}, ${date}/${month}/${year}`;
}
