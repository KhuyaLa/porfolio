window.addEventListener('scroll', function() {
    const header = document.getElementById('header-sticky');
    if (window.scrollY > 64) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
