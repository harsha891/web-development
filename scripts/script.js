/*
    Student Name : Harsha Vardhan Gannamuneni
    File name : script.js
    date : 05-04-2024
*/

//Hamburder menu function
function hamburger() {
    var menu = document.getElementById("menu-links");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}