const dark = document.getElementById("dark");
const light = document.getElementById("light");
var element = document.body;


dark.onclick = function () {
  element.classList.toggle("dark-mode");
};

light.onclick = function () {
    element.classList.toggle("dark-mode");
};