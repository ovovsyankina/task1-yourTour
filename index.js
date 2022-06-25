var header = document.querySelector(".nav_fix");
document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 450) {
    header.classList.add("fixed_menu");
  } else {
    header.classList.remove("fixed_menu");
  }
});
var phoneMask = IMask(document.getElementById("phone"), {
  mask: "+{7}(000)000-00-00",
});
