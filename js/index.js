'use strict';

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);
		randomSelect();
	}
});

//Función para crear los tags separados por coma
function createTags(input) {
	const tags = input
		.split(',') //Divide por coma
		.filter(tag => tag.trim() !== '') //Filtra los espacios vacios
		.map(tag => tag.trim()); //Quita los espacios

	tagsEl.innerHTML = '';

	tags.forEach(tag => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.textContent = tag;

		tagsEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const seconds = 5;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		hightLihgtTag(randomTag);

		setTimeout(() => {
			unHightLihgtTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();

			hightLihgtTag(randomTag);
		}, 100);
	}, seconds * 1000);
}

//Devuelve un tag aleatorio
function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

//Agrega la clase hightlight
function hightLihgtTag(tag) {
	tag.classList.add('hightlight');
}

//Quita la clase hightlight
function unHightLihgtTag(tag) {
	tag.classList.remove('hightlight');
}
