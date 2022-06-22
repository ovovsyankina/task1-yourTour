var header = document.querySelector(".nav_fix");
document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 450) {
    header.classList.add("fixed_menu");
  } else {
    header.classList.remove("fixed_menu");
  }
});
