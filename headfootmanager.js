class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer class="port-footer">
                <div class="footer-contents" id="footer">
                    <p class="link">This website was created by Phung Tran Hieu - Khuya</p>
                    <div class="social-media-container">
                        <a href="https://youtube.com/@ngantoi-khuya?si=EOz1udQk-3HJkzpl" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-youtube"></i></a>
                        <a href="https://www.facebook.com/HieuPhungeightpi7" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="https://khuyaart7.tumblr.com/" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-tumblr"></i></a>
                        <a href="https://cara.app/pastmidnight/portfolio" target="_blank" class="social-media-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="screenshot-6763f4aa-99dd-809b-8008-9a6ee611940d" viewBox="453 4756 47.25 47.25" fill="none" version="1.1">
                                <g id="shape-6763f4aa-99dd-809b-8008-9a6ee611940d">
                                <g class="fills" id="fills-6763f4aa-99dd-809b-8008-9a6ee611940d">
                                    <path d="M453,4762C453,4758.6884765625,455.6885070800781,4756,459,4756L494.25,4756C497.5614929199219,4756,500.25,4758.6884765625,500.25,4762L500.25,4797.25C500.25,4800.5615234375,497.5614929199219,4803.25,494.25,4803.25L459,4803.25C455.6885070800781,4803.25,453,4800.5615234375,453,4797.25L453,4762M484.0772705078125,4775.02685546875L488.0675354003906,4769.65771484375C481.7301330566406,4764.62890625,472.05035400390625,4764.9443359375,466.4778747558594,4771.22119140625C464.6310729980469,4773.3017578125,463.4436950683594,4776.015625,463.306640625,4779.3076171875C463.1159362792969,4783.8876953125,465.17327880859375,4788.1298828125,468.38055419921875,4790.40673828125C474.4472351074219,4794.7138671875,482.6148681640625,4793.67431640625,488.4367980957031,4789.59130859375L484.869873046875,4783.90625C480.58880615234375,4787.2353515625,472.728515625,4786.91796875,472.1853332519531,4780.2587890625C471.64208984375,4773.599609375,479.0033264160156,4771.69677734375,484.0772705078125,4775.02685546875" style="fill:#cfbb9a;fill-opacity:1"></path>
                                </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer> 
        `;
    }
}

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="header-sticky">
                <div class="signature">
                    <object data="Khuya signature.svg" type="image/svg+xml"></object>
                </div>
                <nav class="nav-bar">
                    <a href="index.html" class="nav-text">Home</a>
                    <span class="nav-text">|</span>
                    <a href="Work-GameArt.html" class="nav-text">Works</a>
                    <span class="nav-text">|</span>
                    <a href="#footer" class="nav-text">Social media</a>
                </nav>
            </header>
        `;

        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = this.querySelectorAll('.nav-bar a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // 1. Check for Home
            const isHome = (href === 'index.html') && (currentPath === 'index.html' || currentPath === '');
            
            // 2. Check if current page belongs to any Works page (starts with "Work-")
            const isWorks = (href === 'Work-GameArt.html') && currentPath.startsWith('Work-');

            if (isHome || isWorks) {
                link.classList.add('nav-active');
            } else {
                link.classList.remove('nav-active');
            }
        });
    }
}

class MyNavWork extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-bar-works">
                <button class="button-left">
                    <a class="body-small-bold" href="Work-GameArt.html">Game/concept art</a>
                </button>
                <button class="button-middle">
                    <a class="body-small-bold" href="Work-Animation.html">Animation</a>
                </button>
                <button class="button-right">
                    <a class="body-small-bold" href="Work-3DGraphic.html">3D Graphic</a>
                </button>
            </nav>
        `;

        const currentPath = window.location.pathname.split('/').pop();
        const links = this.querySelectorAll('.nav-bar-works button a');

        links.forEach(link => {
            //const button = link.parentElement;
            // Loại bỏ '.html' khỏi href nếu có để so sánh chính xác
            const linkHref = link.getAttribute('href')//.replace(/\.html$/, '');

            if (currentPath === linkHref || (currentPath === '' && linkHref === 'Work-GameArt.html')) {
                link.classList.add('b-active');
            } else {
                link.classList.remove('b-active');
            }
        });
    }
}

// Define custom elements
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-nav-work', MyNavWork);

// Sticky scroll listener with null check
window.addEventListener('scroll', function() {
    const header = document.getElementById('header-sticky');
    if (!header) return;

    if (window.scrollY > 64) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
