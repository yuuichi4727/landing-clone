
// window.addEventListener('DOMContentLoaded', (event) => {
//     const scrollToTop = document.querySelector('.to__top-btn');
//     const toggleNav = document.querySelector('.navbar__list-toggle-btn');
//     const navbarList = document.querySelector('.navbar__list-wrapper');

//     scrollToTop.onclick = function() {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     (function showTopBtn() {
//         window.onscroll = () => window.scrollY > 100 ? scrollToTop.style.display = 'block' : scrollToTop.style.display = 'none'
//     })();


//     toggleNav.onclick = function(e) {
//         e.preventDefault();
//         navbarList.classList.toggle('active')
//         _toggleMenuIcon()
//     }

// });

// function _toggleMenuIcon() {
//     const menuToggleBars = document.body.querySelector('.navbar__list-toggle-btn > .fa-bars');
//     const menuToggleTimes = document.body.querySelector('.navbar__list-toggle-btn > .fa-xmark');
//     if (menuToggleBars) {
//         menuToggleBars.classList.remove('fa-bars');
//         menuToggleBars.classList.add('fa-xmark');
//     }
//     if (menuToggleTimes) {
//         menuToggleTimes.classList.remove('fa-xmark');
//         menuToggleTimes.classList.add('fa-bars');
//     }
// }

let p1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Success 1'), 500);
  });
  
  let p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Success 2'), 1000);
  });
  
  let p3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Success 3'), 1200);
  });
  
  let promise = Promise.all([p1, p2, p3]);
  
  promise
    .then(function(data) {
      data.forEach(function(data) {
        console.log(data);
      });
    })
    .catch(function(error) {
      console.log('Fail');
    });