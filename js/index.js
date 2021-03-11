'use strict';

const container = document.getElementById('container');
const colors = ['#5900ff', '#f53456', '#38b2ac', '#dcc09a', '#c1cbd8', '#ffff00'];
const squares = 500;

for (let i = 0; i < squares; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));

	container.appendChild(square);
}

function setColor(item) {
	const color = getRandomColor();
	item.style.background = color;
	item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(item) {
	item.style.background = '#1d1d1d';
	item.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
