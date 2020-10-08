var createtextbox = document.createElement("INPUT");
createtextbox.setAttribute("type", "text");
var f = document.getElementById("f");
var add = document.getElementById("add");
console.log(add);
add.addEventListener("click", function () {
  var createtextbox = document.createElement("INPUT");
  createtextbox.setAttribute("type", "text");
  f.appendChild(createtextbox);
});
