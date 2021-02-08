'use strict';
const insert = document.querySelector('#insert');

document.addEventListener('keydown', e => {
	const html = `
        <div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>event.key</small>
		</div>
		<div class="key">
			${e.keyCode}
			<small>event.keyCode</small>
			</div>
		<div class="key">
			${e.code}
			<small>event.code</small>
		</div>
    `;

	insert.innerHTML = html;
});
