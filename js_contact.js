/** These functions are for the color palettes **/

function palette1() {
	document.body.style.background = "#0A1246";
	document.body.style.color = "#11E200";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style.color = "#11E200";
	}
	document.getElementById("nav").style.background = "#192BAB";
	document.getElementById("contact-form").style.background = "#192BAB";
	document.getElementById("color-buttons").style.background = "#192BAB";
	document.getElementById("first-header").style.color = "#C9FFC2";
}
function palette2() {
	document.body.style.background = "#AEC2B6";
	document.body.style.color = "#000000";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style = "color: #000000;";
	}
	document.getElementById("nav").style.background = "#19A7CE";
	document.getElementById("contact-form").style.background = "#19A7CE";
	document.getElementById("color-buttons").style.background = "#19A7CE";
	document.getElementById("first-header").style.color = "#146C94";
}

function palette3() {
	document.body.style.background = "#252526";
	document.body.style.color = "#64DFDE";
	let links = document.querySelectorAll("a");
	for(i = 0; i < links.length; i++) {
		document.links[i].style = "color: #64DFDE;";
	}
	document.getElementById("nav").style.background = "#6930C4";
	document.getElementById("contact-form").style.background = "#6930C4";
	document.getElementById("color-buttons").style.background = "#6930C4";
	document.getElementById("first-header").style.color = "#80FFDC";
}

// Variables for the color palette buttons
const button1 = document.getElementById("palette1");
const button2 = document.getElementById("palette2");
const button3 = document.getElementById("palette3");

button1.addEventListener("click", palette1);
button2.addEventListener("click", palette2);
button3.addEventListener("click", palette3);



/** This is a function for the submission form on contact.html **/

function submitEmail() {
	let firstName = document.querySelector("#first").value;
	let lastName = document.querySelector("#last").value;
	let email = document.querySelector("#email").value;
	let message = document.querySelector("#message").value;
	var inputBoxes = document.querySelectorAll("input[type=text]");
	let textBox = document.querySelector("#message");
	
	// Disables a filled input field and changes its background color
	if (firstName != "") {
		inputBoxes[0].disabled = true;
		inputBoxes[0].className = "input-color";
	}
	if (lastName != "") {
		inputBoxes[1].disabled = true;
		inputBoxes[1].className = "input-color";
	}
	if (email != "") {
		inputBoxes[2].disabled = true;
		inputBoxes[2].className = "input-color";
	}
	if (message != "") {
		textBox.disabled = true;
		textBox.className = "input-color";
	}
	
	
	// Determines whether the form should be submitted, based on the input from the user
	if (firstName === "" || lastName === "" || email === "" || message === "") {
		console.log("A field has no input");
		event.preventDefault();
		alert("Sorry, Your submission could not be completed. Please fill in all the fields.");
	}
	else {
		console.log("Submission successful");
		alert("Thank you for sending me an email, " + firstName + "!");
	}
}


/** This is a function for resetting the form on contact.html **/

function resetEmail() {
	console.log("Contact form reset");
	var inputBoxes = document.querySelectorAll("input[type=text]");
	let textBox = document.querySelector("#message");
	inputBoxes[0].disabled = false;
	inputBoxes[1].disabled = false;
	inputBoxes[2].disabled = false;
	textBox.disabled = false;
	inputBoxes[0].value = "";
	inputBoxes[1].value = "";
	inputBoxes[2].value = "";
	textBox.value = "";
	inputBoxes[0].classList.remove("input-color");
	inputBoxes[1].classList.remove("input-color");
	inputBoxes[2].classList.remove("input-color");
	textBox.classList.remove("input-color");
}


// Variables for both the submit and reset buttons
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");


submitButton.addEventListener("click", submitEmail);
resetButton.addEventListener("click", resetEmail);

