'use strict';

const cups = document.querySelectorAll('.cup-small'),
	liters = document.querySelector('#liters'),
	percentage = document.querySelector('#percentage'),
	remained = document.querySelector('#remained');

updateBigCup();

cups.forEach((cup, index) => {
	cup.addEventListener('click', () => hightLightCups(index));
});

function hightLightCups(index) {
	if (cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')) {
		index--;
	}

	cups.forEach((cup, idx) => {
		idx <= index ? cup.classList.add('full') : cup.classList.remove('full');
	});

	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length,
		totalCups = cups.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 33}rem`;
		percentage.textContent = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.textContent = `${2 - (250 * fullCups) / 1000}`;
	}
}
