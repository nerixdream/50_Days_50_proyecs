'use strict';
const hourEl = document.querySelector('.hour'),
	minuteEl = document.querySelector('.minute'),
	secondEl = document.querySelector('.second'),
	timeEl = document.querySelector('.time'),
	dateEl = document.querySelector('.date'),
	toggleEl = document.querySelector('.toggle');

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

//Modo oscuro
toggleEl.addEventListener('click', e => {
	const html = document.querySelector('html');

	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.textContent = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.textContent = 'Light Mode';
	}
});

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const setTime = () => {
	const time = new Date(),
		month = time.getMonth(),
		day = time.getDay(),
		date = time.getDate(),
		hour = time.getHours(),
		hourForClock = hour % 12,
		minutes = time.getMinutes(),
		seconds = time.getSeconds(),
		ampm = hour >= 12 ? 'PM' : 'AM';

	hourEl.style.transform = ` translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`;
	minuteEl.style.transform = ` translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
	secondEl.style.transform = ` translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

	timeEl.textContent = `${hourForClock}:${minutes < 10 ? `0${minutes}` : `${minutes}`} ${ampm}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

setTime();

setInterval(setTime, 1000);
