/* Variables */
    const title = document.getElementById("title")
    const btn = document.getElementById("injector")
    const btn2 = document.getElementById("continue")
    const box = document.getElementById("textbox")
    const msg = document.getElementById("msg")
    const url1 = "chrome-extension://joflmkccibkooplaeoinecjbmdebglab/blocked.html?category=PGEgaHJlZj0iYWJvdXQ6YmxhbmsiIHRhcmdldD0iX2JsYW5rIiByZWw9Im9wZW5lciIgc3R5bGU9IiBiYWNrZ3JvdW5kOiB3aGl0ZTsgY29sb3I6IGJsYWNrOyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAzODBweDsgdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgIj48ZGl2PkNsaWNrIE1lPC9kaXY%2BIDwvYT4%3D"
    const url2 = "javascript:opener.chrome.extension.getBackgroundPage().close();";
    const msg1 = "Copy The Text In The TextBox, And Open It In A New Tab, Then Reload The Page. (Come Back After Doing This)"
    const msg2 = "You Should Have Seen Text That Read 'Click Me' (If Not Reload This Page And Try Again.) Copy The Text Below, And Go Back To The Page You Just Opened. Click The Text, And Paste The Code Into Your Bookmarks And Click It From There."
    var cf;

/* Event Listeners */
document.addEventListener("DOMContentLoaded", (event) => {
    // Script To Load Automatically Once Website Loads
});

injector.addEventListener("click", function() {
    var cf = confirm('[ ATTENTION ]\nThis Is Meant For Securly Only\nIf You Dont Have Securly, Press Cancel Now!');
    if (cf === true){
        title.innerHTML = "Curly";
        btn.style.display = "none";
        console.log('You Confirmed To Continue!');
        console.log("If You Need To, Save Whatever Is Currently On Your Clipboard, As It Will Be Overwritten");
        box.style.display = "block";
        msg.innerHTML = msg1;
        box.value = url1;
        setTimeout(function() {
            btn2.style.display = "block";
            return;
          }, 5000);
    } else {
        return;
    }
});

btn2.addEventListener("click", function() {
    btn2.style.display = "none";
    msg.innerHTML = msg2;
    box.value = url2;
});

box.addEventListener("click", function() {
    box.select();
    box.setSelectionRange(0, 99999999);
    navigator.clipboard.writeText(box.value); 
});



/* Functions */
    // Content Here

/* Other Scripts */
    // Content Here



            // navigator.clipboard.writeText(url1);
