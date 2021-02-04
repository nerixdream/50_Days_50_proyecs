'use strict';
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

const html = document.body.parentNode;

btn.addEventListener('click', e => {
	search.classList.toggle('active');
	input.focus();
});
