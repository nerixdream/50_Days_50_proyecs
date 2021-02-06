'use strict';
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const getJoke = async () => {
	const url = 'https://icanhazdadjoke.com/';
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const respuesta = await fetch(url, config);
	const { joke } = await respuesta.json();

	jokeEl.innerHTML = joke;
};

getJoke();

jokeBtn.addEventListener('click', getJoke);
