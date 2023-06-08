`use strict`;

const mobileNavToggle = document.querySelector(`.mobile-nav-toggle`);
const primaryNav = document.querySelector(`.primary-navigation`);

mobileNavToggle.addEventListener("click", function () {
	const visibility = primaryNav.getAttribute("data-visible");
	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
		mobileNavToggle.setAttribute("aria-expanded", true);
	} else {
		primaryNav.setAttribute("data-visible", false);
		mobileNavToggle.setAttribute("aria-expanded", false);
	}
});
