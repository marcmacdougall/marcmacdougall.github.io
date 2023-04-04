/** These functions are for the color palettes **/

function palette1() {
	document.body.style.background = "#0A1246";
	document.body.style.color = "#11E200";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style.color = "#11E200";
	}
	document.getElementById("nav").style.background = "#192BAB";
	document.getElementById("code").style.background = "#192BAB";
	document.getElementById("code").style.border = "5px ridge #FFFF00";
	document.getElementById("videos").style.background = "#192BAB";
	document.getElementById("color-buttons").style.background = "#192BAB";
	document.getElementById("first-header").style.color = "#C9FFC2";
	document.getElementById("second-header").style.color = "#C9FFC2";
}
function palette2() {
	document.body.style.background = "#AEC2B6";
	document.body.style.color = "#000000";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style = "color: #000000;";
	}
	document.getElementById("nav").style.background = "#19A7CE";
	document.getElementById("code").style.background = "#19A7CE";
	document.getElementById("code").style.border = "5px ridge #A020F0";
	document.getElementById("videos").style.background = "#19A7CE";
	document.getElementById("color-buttons").style.background = "#19A7CE";
	document.getElementById("first-header").style.color = "#146C94";
	document.getElementById("second-header").style.color = "#146C94";
}

function palette3() {
	document.body.style.background = "#252526";
	document.body.style.color = "#64DFDE";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style = "color: #64DFDE;";
	}
	document.getElementById("nav").style.background = "#6930C4";
	document.getElementById("code").style.background = "#6930C4";
	document.getElementById("code").style.border = "5px ridge #16FF00";
	document.getElementById("videos").style.background = "#6930C4";
	document.getElementById("color-buttons").style.background = "#6930C4";
	document.getElementById("first-header").style.color = "#80FFDC";
	document.getElementById("second-header").style.color = "#80FFDC";
}

// Variables for the color palette buttons
const button1 = document.getElementById("palette1");
const button2 = document.getElementById("palette2");
const button3 = document.getElementById("palette3");

button1.addEventListener("click", palette1);
button2.addEventListener("click", palette2);
button3.addEventListener("click", palette3);
