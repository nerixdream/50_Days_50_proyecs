'use strict';
const textEl = document.querySelector('#text'),
	speedEl = document.querySelector('#speed'),
	text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
	textEl.textContent = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
};

writeText();

speedEl.addEventListener('input', e => (speed = 300 / e.target.value));
