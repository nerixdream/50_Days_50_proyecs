'use strict';

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeClasses();
		panel.classList.add('active');
	});
});

const removeClasses = () => {
	panels.forEach(panel => panel.classList.remove('active'));
};
