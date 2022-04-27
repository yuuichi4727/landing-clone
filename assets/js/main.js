
window.addEventListener('DOMContentLoaded', (event) => {
    const scrollToTop = document.querySelector('.to__top-btn');
    const toggleNav = document.querySelector('.navbar__list-toggle-btn');
    const navbarList = document.querySelector('.navbar__list-wrapper');


    (function showTopBtn() {
        window.onscroll = () => window.scrollY > 100 ? scrollToTop.style.display = 'block' : scrollToTop.style.display = 'none'
    })();


    toggleNav.onclick = function(e) {
        e.preventDefault();
        navbarList.classList.toggle('active')
        _toggleMenuIcon()
    }

});

function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector('.navbar__list-toggle-btn > .fa-bars');
    const menuToggleTimes = document.body.querySelector('.navbar__list-toggle-btn > .fa-xmark');
    if (menuToggleBars) {
        menuToggleBars.classList.remove('fa-bars');
        menuToggleBars.classList.add('fa-xmark');
    }
    if (menuToggleTimes) {
        menuToggleTimes.classList.remove('fa-xmark');
        menuToggleTimes.classList.add('fa-bars');
    }
}