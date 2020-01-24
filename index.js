// var prevPos = window.pageYOffset
//
//
// window.addEventListener("scroll", myFunction)
//
// var navbar = document.querySelector("nav")
//
// var sticky = navbar.offsetTop
//
// function myFunction() {
//   var currentPos = window.pageYOffset
//   if (prevPos > currentPos) {
//     header.classList.remove("sticky")
//   } else {
//     navbar.classList.add("sticky")
//   }
//   prevPos = currentPos
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}
