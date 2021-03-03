'use strict';

//Variables del DOM
const resulEl = document.getElementById('result'),
	lengthEl = document.getElementById('length'),
	uppercaseEl = document.getElementById('uppercase'),
	lowercaseEl = document.getElementById('lowercase'),
	numbersEl = document.getElementById('numbers'),
	symbolsEl = document.getElementById('symbols'),
	generateEl = document.getElementById('generate'),
	clipboardEl = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resulEl.innerText;

	if (!password) return;

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to Clipboard');
});

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;

	const [hasLower, hasUpper, hasNumber, hasSymbol] = [
		lowercaseEl.checked,
		uppercaseEl.checked,
		numbersEl.checked,
		symbolsEl.checked,
	];

	resulEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatePassword = '';
	const typesCount = lower + upper + number + symbol; //Devuelve cuantos estan con el checked en true (Ejem: 3 o 4)
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]); //Filtra los que tengan checked

	if (typesCount === 0) return null;

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatePassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatePassword.slice(0, length);

	return finalPassword;
}

//Retorna una letra aleatoria minuscula
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Retorna una letra aleatoria mayuscula
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Retorna un numero aleatorio entre el 0 y 9
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Retorna un simbolo aleatorio
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
