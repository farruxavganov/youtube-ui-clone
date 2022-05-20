const form = document.querySelector(".main-header__form");
const inputBox = document.querySelector(".main-header__input-box");
const input = document.querySelector(".main-header__input");
const hidden = document.querySelector(".main-header__hidden");
const svgs = hidden.querySelectorAll("svg");

input.addEventListener("focus",inputFocus);

input.addEventListener("blur",inputBlur);

svgs[1].addEventListener("click", ()=>{
	input.value = "";
	isClearValue();
	inputFocus();
	input.focus();
})

input.addEventListener("input",isClearValue);

function inputFocus () {
	form.style.borderLeft = "none";
	form.style.boxShadow = "none";
	hidden.style.visibility = "visible";
	hidden.style.opacity = "1";
}

function inputBlur () {
	form.style.borderLeft = "1px solid #cccccc";
	form.style.boxShadow = "1.5px solid #cccccc";
	hidden.style.visibility = "hidden";
	hidden.style.opacity = "0";
}

function isClearValue () {
	if(input.value !== ""){
		svgs[1].style.visibility = "visible";
		svgs[1].style.opacity = "1";
	}else {
		svgs[1].style.background = "red";
		svgs[1].style.visibility = "hidden";
		svgs[1].style.opacity = "0";
	}
}