const header = document.querySelector('#common-header');

window.addEventListener('load', function (){
    header.innerHTML = sketch.html;
})


class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="header-sticky">
                <div class="signature">
                    <object data="Khuya signature.svg" type="image/svg+xml"></object>
                </div>
                <nav class="nav-bar">
                    <button class="nav-text"><a href="index.html"><p>Home</p></a></button>
                    <p class="nav-text">|</p>
                    <button class="nav-text"><a href="Work-GameArt.html"><p>Works</p></a></button>
                    <p class="nav-text">|</p>
                    <button class="nav-text"><a href="#"><p>Social media</p></a></button>
                </nav>
            </header>
        `;

        const currentPath = window.location.pathname.split('/').pop();
        const navButtons = this.querySelectorAll('.nav-bar button');

        navButtons.forEach(button => {
            const link = button.querySelector('a');
            if (!link) return;

            const href = link.getAttribute('href');

            // 1. Check for Home
            const isHome = (href === 'index.html') && (currentPath === 'index.html' || currentPath === '');
            
            // 2. Check if current page belongs to any Works page (starts with "Work-")
            const isWorks = (href === 'Work-GameArt.html') && currentPath.startsWith('Work-');

            if (isHome || isWorks) {
                button.classList.add('nav-active');
            } else {
                button.classList.remove('nav-active');
            }
        });
    }
}

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer class="port-footer">
                <div class="footer-contents">
                    <p class="link">This website was created by Phung Tran Hieu - Khuya</p>
                    <div class="social-media-container">
                        <a href="https://youtube.com/@ngantoi-khuya?si=EOz1udQk-3HJkzpl" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-youtube"></i></a>

                        <a href="https://www.facebook.com/HieuPhungeightpi7" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-facebook"></i></a>

                        <a href="https://khuyaart7.tumblr.com/" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-tumblr"></i></a>

                        <a href="https://www.instagram.com/im.empty_03/" target="_blank" class="social-media-icon"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
            </footer> 
        `
    }
}

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)

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

        // Get current URL filename (e.g., "Work-GameArt.html")
        const currentPath = window.location.pathname.split('/').pop();
        const links = this.querySelectorAll('.nav-bar-works a');

        links.forEach(link => {
            //const button = link.parentElement;
            // Loại bỏ '.html' khỏi href nếu có để so sánh chính xác
            const linkHref = link.getAttribute('href').replace(/\.html$/, '');

            if (currentPath === linkHref || (currentPath === '' && linkHref === 'Work-GameArt.html')) {
                link.classList.add('b-active');
            } else {
                link.classList.remove('b-active');
            }
        });
    }
}

customElements.define('my-nav-work', MyNavWork);

window.addEventListener('scroll', function() {
    const header = document.getElementById('header-sticky');
    if (window.scrollY > 64) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
