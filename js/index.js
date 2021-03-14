'use strict';

const contents = document.querySelectorAll('.content'); //Selecciona todas las imagenes
const listItems = document.querySelectorAll('nav ul li'); //Selecciona todos los enlaces

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideAllContent(); //Quita la clase de show
		hideAllItems(); //Quita la clase de active

		item.classList.add('active'); //Añade la clase active
		contents[idx].classList.add('show'); //Añade la clase active
	});
});

function hideAllContent() {
	contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
	listItems.forEach(item => item.classList.remove('active'));
}
