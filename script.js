var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".conainer");

menuIcon.onclick = function (){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("after-containerr")
}
var loader  = document.getElementById("preloader")
window.addEventListener("load",function(){
    loader.style.display = "none"
}
)
