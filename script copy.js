/* Variables */
const btn = document.getElementById("injector")

/* Event Listeners */
document.addEventListener("DOMContentLoaded", (event) => {
// Script To Load Automatically Once Website Loads
});

injector.addEventListener("click", function() {
var cf = confirm('[ ATTENTION ]\nThis Is Meant For Securly Only\nIf You Dont Have Securly, Press Cancel Now!');
if (cf === true){
    btn.style.display = "none";
    var ExtPage = window.open("chrome-extension://joflmkccibkooplaeoinecjbmdebglab/blocked.html?category=PGEgaHJlZj0iYWJvdXQ6YmxhbmsiIHRhcmdldD0iX2JsYW5rIiByZWw9Im9wZW5lciIgc3R5bGU9IiBiYWNrZ3JvdW5kOiB3aGl0ZTsgY29sb3I6IGJsYWNrOyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAzODBweDsgdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgIj48ZGl2PkNsaWNrIE1lPC9kaXY%2BIDwvYT4%3D")
} else {
    return;
}
});