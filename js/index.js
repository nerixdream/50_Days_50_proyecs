'use strict';

const button = document.querySelector('#button'),
	toastsDiv = document.querySelector('#toasts');

const messages = ['Mensaje uno', 'Mensaje dos', 'Mensaje tres', 'Mensaje cuatro'];

button.addEventListener('click', createNotification);

function createNotification() {
	const noti = document.createElement('div');
	noti.classList.add('toast');
	noti.textContent = randomMessage();

	toastsDiv.appendChild(noti);

	setTimeout(() => {
		noti.remove();
	}, 2000);
}

function randomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
