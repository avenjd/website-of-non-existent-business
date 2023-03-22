document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	const link = document.querySelector('.navbar-collapse');
	function showNav() {
		link.classList.toggle('show');
	}

	window.addEventListener('scroll', addShadow);
	link.addEventListener('click', showNav);
});
