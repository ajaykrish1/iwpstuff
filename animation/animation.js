var L = document.querySelector(".L");
var O = document.querySelector(".O");
var A = document.querySelector(".A");
var D = document.querySelector(".D");
var I = document.querySelector(".I");
var N = document.querySelector(".N");
var G = document.querySelector(".G");

function add() {
  L.classList.add("Lanimation");
  O.classList.add("Oanimation");
  A.classList.add("Aanimation");
  D.classList.add("Danimation");
  I.classList.add("Ianimation");
  N.classList.add("Nanimation");
  G.classList.add("Ganimation");
}
function remove() {
  L.classList.remove("Lanimation");
  O.classList.remove("Oanimation");
  A.classList.remove("Aanimation");
  D.classList.remove("Danimation");
  I.classList.remove("Ianimation");
  N.classList.remove("Nanimation");
  G.classList.remove("Ganimation");
}
function toggle() {
  L.classList.toggle("Lanimation");
  O.classList.toggle("Oanimation");
  A.classList.toggle("Aanimation");
  D.classList.toggle("Danimation");
  I.classList.toggle("Ianimation");
  N.classList.toggle("Nanimation");
  G.classList.toggle("Ganimation");
}
add();
setInterval(function () {
  remove();
  setTimeout(function () {
    add();
  }, 100);
}, 5000);
