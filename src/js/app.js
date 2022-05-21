const mainHeadrStart = document.querySelector(".main-header__start");
const body = document.querySelector("body");
const mainHeaderStrtPointer = document.querySelector(".main-header__strt-pointer");
const form = document.querySelector(".main-header__form");
const inputBox = document.querySelector(".main-header__input-box");
const input = document.querySelector(".main-header__input");
const hidden = document.querySelector(".main-header__hidden");
const smallSearch = document.querySelector(".main-header__small-search");
const svgs = hidden.querySelectorAll("svg");
const mainHeaderEnd = document.querySelector(".main-header__end");

window.onresize = resizeControl;

input.addEventListener("focus",inputFocus);

input.addEventListener("blur",inputBlur);

svgs[1].addEventListener("click", ()=>{
	input.value = "";
	isClearValue();
	inputFocus();
	input.focus();
})

input.addEventListener("input",isClearValue);

smallSearch.addEventListener("click",addSearchBar);

mainHeaderStrtPointer.addEventListener("click",removeSearchBar);

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
		svgs[1].style.visibility = "hidden";
		svgs[1].style.opacity = "0";
	}
}

function addSearchBar (){
	mainHeadrStart.classList.add("d-none");
	mainHeaderStrtPointer.classList.add("d-block");
	form.classList.add("d-flex");
	smallSearch.classList.add("d-none");
	mainHeaderEnd.classList.add("d-none");
	input.focus();
}

function removeSearchBar () {
	mainHeadrStart.classList.remove("d-none");
	mainHeaderStrtPointer.classList.remove("d-block");
	form.classList.remove("d-flex");
	smallSearch.classList.remove("d-none");
	mainHeaderEnd.classList.remove("d-none");
}

function removeClass () {
	mainHeadrStart.classList.remove("d-none");
	mainHeaderStrtPointer.classList.remove("d-block");
	form.classList.remove("d-flex");
	smallSearch.classList.remove("d-none");
	mainHeaderEnd.classList.remove("d-none");
}

function resizeControl () {
	if(window.innerWidth >= 768) {
		removeClass();
	}else {
		if(input == document.activeElement) {
			addSearchBar();
		}
	}
	if(input == document.activeElement){
		input.focus();
	}
}