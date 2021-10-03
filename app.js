const burger = document.querySelector("div.burger"),
	navLinks = document.querySelector("div.nav-links");

burger.addEventListener("click", () => {
	navLinks.classList.toggle("nav-links-active");
	burger.classList.toggle("burger-active");
});

//Make sure the nav is restyled
window.addEventListener("resize", () => {
	if (window.innerWidth >= 800) {
		navLinks.classList.remove("nav-links-active");
		burger.classList.remove("burger-active");
	}
});
