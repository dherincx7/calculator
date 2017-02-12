var display = document.getElementById("display");

function clr() {
 display.innerHTML = 0;
};


for (var i=0; i<10; i++) {
 var button = document.getElementById("button-" + i);
 if (button != null) {
   button.onclick = function(e) {
     if (display.innerHTML == 0) {
       display.innerHTML = e.target.id.substring(7);
     }
     else {
       display.innerHTML += e.target.id.substring(7);
     }
   }
 }
}

function dec() {
	var curr = display.innerHTML;
	if (curr.indexOf (".") == -1) {
		display.innerHTML += ".";
 }
}

function neg() {
	display.innerHTML = display.innerHTML * -1;
}