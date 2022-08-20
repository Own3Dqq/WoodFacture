/* Slick slider (Hero) */
$(document).ready(function () {
	$('.hero-slider__list').slick({
		arrows: true,
		infinite: false,
		autoplay: true,
		dots: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.hero-slider__prev',
		nextArrow: '.hero-slider__next',
		dotsClass: 'hero-slider__wrapper',
		appendDots: '.hero-slider__switchers',
		slickPrev: '.hero-slider__prev',
		slickPrev: '.hero-slider__next',
	});
});

const currentSlide = document.querySelector('.current');
console.log(currentSlide);

/* Works Slider */
// $(document).ready(function () {
// 	$('.works-slider__list').slick({
// 		arrows: false,
// 		infinite: false,
// 		autoplay: false,
// 		// speed: 300,
// 		fade: true,
// 		cssEase: 'linear',
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 	});
// });
