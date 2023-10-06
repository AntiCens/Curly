/* Variables */
    const btn = document.getElementById("injector")
    const box = document.getElementById("textbox")
    const msg = document.getElementById("msg")
    const url1 = "chrome-extension://joflmkccibkooplaeoinecjbmdebglab/blocked.html?category=PGEgaHJlZj0iYWJvdXQ6YmxhbmsiIHRhcmdldD0iX2JsYW5rIiByZWw9Im9wZW5lciIgc3R5bGU9IiBiYWNrZ3JvdW5kOiB3aGl0ZTsgY29sb3I6IGJsYWNrOyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAzODBweDsgdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgIj48ZGl2PkNsaWNrIE1lPC9kaXY%2BIDwvYT4%3D"
    var cf;

/* Event Listeners */
document.addEventListener("DOMContentLoaded", (event) => {
    // Script To Load Automatically Once Website Loads
});

injector.addEventListener("click", function() {
    var cf = confirm('[ ATTENTION ]\nThis Is Meant For Securly Only\nIf You Dont Have Securly, Press Cancel Now!');
    if (cf === true){
        btn.style.display = "none";
        alert('You Confirmed To Continue!');
        alert("If You Need To, Save Whatever Is Currently On Your Clipboard, As It Will Be Overwritten");
        box.style.display = "block";
        msg.innerHTML = "Copy The Text In The Message Below, And Open It In A New Tab";
        box.value = url1;
    } else {
        return;
    }
});

/* Functions */
    // Content Here

/* Other Scripts */
    // Content Here



            // navigator.clipboard.writeText(url1);
