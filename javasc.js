let btn = document.getElementById("btnMenu");
let menu = document.getElementById("menu");

btn.addEventListener("click", function () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});