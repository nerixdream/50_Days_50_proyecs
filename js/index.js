'use strict';

const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const parent = button.parentElement;
		parent.classList.toggle('active');
	});
});
