'use strict';

const sliderContainer = document.querySelector('.slider-container'),
	slideLeft = document.querySelector('.left-slide'),
	slideRight = document.querySelector('.right-slide'),
	downBtn = document.querySelector('.down-button'),
	upBtn = document.querySelector('.up-button'),
	slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

//Poner en posición correcta los slides
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
	const sliderHeight = sliderContainer.clientHeight;

	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex > slidesLength - 1) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1;
		}
	}

	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
