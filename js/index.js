$(document).ready(function () {
  $(".series").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.onclick = function (e) {
  e.stopPropagation();
  toggleMenu();
};

mainNav.onclick = function (e) {
  e.stopPropagation();
};

document.body.onclick = function () {
  mainNav.classList.remove("active");
};

function toggleMenu() {
  console.log("onclik funciona");
  mainNav.classList.toggle("active");
}
