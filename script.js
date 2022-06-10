var navLinks = document.getElementById("navLinks");

var bars = document.getElementById('bars');

function showMenu(){
    navLinks.style.right = "0";

}
function hideMenu(){
    navLinks.style.right = "-200px";
}

document.onclick = function(e) {
    if(e.target.id !== "navLinks" && e.target.id !== "bars") {
        navLinks.style.right = "-200px";
    }
}