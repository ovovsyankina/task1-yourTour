var header = document.querySelector(".nav");
document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 450) {
    header.classList.add("fixed_menu");
  } else {
    header.classList.remove("fixed_menu");
  }
});
if (document.documentElement.clientWidth < 1024) {
  element.classList.remove("hover");
}
