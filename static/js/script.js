// Toggle navbar menu on small screens
const navbarMenu = document.getElementById("navbar-menu");
const navbarToggler = document.getElementById("navbar-toggler");

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});



// const marquee = document.querySelector('.partners-marquee');
// const tryme = document.querySelector('.try');

// marquee.innerHTML += marquee.innerHTML;

// let scrollAmount = 2;

// function scrollMarquee() {
//     if (marquee.scrollLeft >= marquee.scrollWidth) {
//         marquee.scrollLeft = 0;
//     } else {
//         marquee.scrollLeft += scrollAmount;
//     }
// }
// setInterval(scrollMarquee, 5000);
