const mainHeadrStart = document.querySelector(".main-header__start");
const mentBtn = document.querySelector('.main-header__menu--btn');
const mainHeaderStrtPointer = document.querySelector(".main-header__strt-pointer");
const form = document.querySelector(".main-header__form");
const inputBox = document.querySelector(".main-header__input-box");
const input = document.querySelector(".main-header__input");
const hidden = document.querySelector(".main-header__hidden");
const mainHeaderClearBtn = document.querySelector(".main-header__clear-btn");
const smallSearch = document.querySelector(".main-header__small-search");
const svgs = hidden.querySelectorAll("svg");
const mainHeaderEnd = document.querySelector(".main-header__end");

const saidbar = document.querySelector(".saidbar");
const navbarMediumItme = document.querySelectorAll(".navbar-medium__itme");
const navbarMedium = document.querySelector(".navbar-medium");
const navbarWrapper = document.querySelector(".navbar-wrapper");
const saidbarWrapper = document.querySelector(".saidbar__wrapper");
const navbarShadow = document.querySelector(".navbar-shadow");
let toggle = false;

window.onresize = resizeControl;

input.addEventListener("focus",inputFocus);

input.addEventListener("blur",inputBlur);

svgs[1].addEventListener("click", ()=>{
	input.value = "";
	isClearValue();
	inputFocus();
	input.focus();
})

mainHeaderClearBtn.addEventListener("click", ()=>{
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
	hidden.style.visibility = "hidden";
	hidden.style.opacity = "0";
	if(window.innerWidth <= 576){
		form.style.boxShadow = "none";
		form.style.borderLeft = "none";
	}else {
		form.style.borderLeft = "1px solid #cccccc";
		form.style.boxShadow = "1.5px solid #cccccc";
	}
}

function isClearValue () {
	if(input.value !== ""){
		svgs[1].style.visibility = "visible";
		svgs[1].style.opacity = "1";
		if(window.innerWidth <= 568) {
			mainHeaderClearBtn.style.display = "block";
		}else {
			mainHeaderClearBtn.style.display = "none";
		}
	}else {
		svgs[1].style.visibility = "hidden";
		svgs[1].style.opacity = "0";
		mainHeaderClearBtn.style.display = "none";
	}
}

function addSearchBar (){
	mainHeadrStart.classList.add("d-none");
	mainHeaderStrtPointer.classList.add("d-flex");
	form.classList.add("d-flex");
	smallSearch.classList.add("d-none");
	mainHeaderEnd.classList.add("d-none");
	input.focus();
}

function removeSearchBar () {
	mainHeadrStart.classList.remove("d-none");
	mainHeaderStrtPointer.classList.remove("d-flex");
	form.classList.remove("d-flex");
	smallSearch.classList.remove("d-none");
	mainHeaderEnd.classList.remove("d-none");
}

function removeClass () {
	mainHeadrStart.classList.remove("d-none");
	mainHeaderStrtPointer.classList.remove("d-flex");
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

	if(window.innerWidth <= 576){
		form.style.boxShadow = "none";
		form.style.borderLeft = "none";
	}else {
		form.style.borderLeft = "1px solid #cccccc";
		form.style.boxShadow = "1.5px solid #cccccc";
	}
}

function forActive (data) {
	data.forEach(item => {
		item.addEventListener("click", (e) => {
			data.forEach(item => {
				item.classList.remove("active");
			})
			e.target.parentElement.classList.add("active");
		})
	})
}
forActive(navbarMediumItme);



