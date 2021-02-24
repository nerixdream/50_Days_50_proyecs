'use strict';

const fill = document.querySelector('.fill'),
	emties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of emties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	this.classList += ' hold';
	setTimeout(() => {
		this.classList = '';
	}, 0);
}

function dragEnd() {
	this.classList = 'fill';
}

//Previene su comportamiento por defecto del evento draggable
//De esta manera podemos arrastrar a cualquier div
function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.classList += ' hovered';
}

function dragLeave() {
	this.classList = 'empty';
}

function dragDrop() {
	this.classList = 'empty';
	this.append(fill);
}
