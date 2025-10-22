const openAlert = document.getElementsByClassName("open-alert");
const value = document.getElementById("value");

function go() {
  alert("go");
}

openAlert[0].addEventListener("click", go);
