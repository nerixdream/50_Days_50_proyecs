'use strict';
const loveMe = document.querySelector('.loveMe'),
	times = document.querySelector('.times');

let timeClicked = 0;

loveMe.addEventListener('dblclick', e => {
	const heart = document.createElement('i');
	heart.className = 'fas fa-heart';

	const x = e.clientX;
	const y = e.clientY;

	const xOffset = e.target.offsetLeft;
	const yOffset = e.target.offsetTop;

	const xInside = x - xOffset;
	const yInside = y - yOffset;

	heart.style.left = `${xInside}px`;
	heart.style.top = `${yInside}px`;

	loveMe.appendChild(heart);

	times.textContent = ++timeClicked;

	setTimeout(() => {
		heart.remove();
	}, 1000);
});
