/** These functions are for the color palettes **/

function palette1() {
	document.body.style.background = "#0A1246";
	document.body.style.color = "#11E200";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style.color = "#11E200";
	}
	document.getElementById("nav").style.background = "#192BAB";
	document.getElementById("goldberg").style.background = "#192BAB";
	document.getElementById("goldberg").style.border = "5px ridge #FFFF00";
	document.getElementById("color-buttons").style.background = "#192BAB";
	document.getElementById("first-header").style.color = "#C9FFC2";
	document.getElementById("second-header").style.color = "#C9FFC2";
	document.getElementById("third-header").style.color = "#C9FFC2";
}
function palette2() {
	document.body.style.background = "#AEC2B6";
	document.body.style.color = "#000000";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style = "color: #000000;";
	}
	document.getElementById("nav").style.background = "#19A7CE";
	document.getElementById("goldberg").style.background = "#19A7CE";
	document.getElementById("goldberg").style.border = "5px ridge #A020F0";
	document.getElementById("color-buttons").style.background = "#19A7CE";
	document.getElementById("first-header").style.color = "#146C94";
	document.getElementById("second-header").style.color = "#146C94";
	document.getElementById("third-header").style.color = "#146C94";
}

function palette3() {
	document.body.style.background = "#252526";
	document.body.style.color = "#64DFDE";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style = "color: #64DFDE;";
	}
	document.getElementById("nav").style.background = "#6930C4";
	document.getElementById("goldberg").style.background = "#6930C4";
	document.getElementById("goldberg").style.border = "5px ridge #16FF00";
	document.getElementById("color-buttons").style.background = "#6930C4";
	document.getElementById("first-header").style.color = "#80FFDC";
	document.getElementById("second-header").style.color = "#80FFDC";
	document.getElementById("third-header").style.color = "#80FFDC";
}

// Variables for the color palette buttons
const button1 = document.getElementById("palette1");
const button2 = document.getElementById("palette2");
const button3 = document.getElementById("palette3");

button1.addEventListener("click", palette1);
button2.addEventListener("click", palette2);
button3.addEventListener("click", palette3);



/** These functions toggle the hidden property of every list entry **/

function revealGoals1() {
	console.log("List Entry Clicked");
	hidden[0].toggleAttribute("hidden");
}
function revealGoals2() {
	console.log("List Entry Clicked");
	hidden[1].toggleAttribute("hidden");
}
function revealGoals3() {
	console.log("List Entry Clicked");
	hidden[2].toggleAttribute("hidden");
}
function revealGoals4() {
	console.log("List Entry Clicked");
	hidden[3].toggleAttribute("hidden");
}
function revealGoals5() {
	console.log("List Entry Clicked");
	hidden[4].toggleAttribute("hidden");
}
function revealGoals6() {
	console.log("List Entry Clicked");
	hidden[5].toggleAttribute("hidden");
}
function revealGoals7() {
	console.log("List Entry Clicked");
	hidden[6].toggleAttribute("hidden");
}
function revealGoals8() {
	console.log("List Entry Clicked");
	hidden[7].toggleAttribute("hidden");
}

// Variables for each list entry and hidden description
const goals = document.getElementsByClassName("goals");
const hidden = document.getElementsByClassName("hidden");

goals[0].addEventListener("click", revealGoals1);
goals[1].addEventListener("click", revealGoals2);
goals[2].addEventListener("click", revealGoals3);
goals[3].addEventListener("click", revealGoals4);
goals[4].addEventListener("click", revealGoals5);
goals[5].addEventListener("click", revealGoals6);
goals[6].addEventListener("click", revealGoals7);
goals[7].addEventListener("click", revealGoals8);