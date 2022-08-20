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

/* Blog Slider */
$(document).ready(function () {
	$('.blog__list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		infinite: false,
		dots: true,
		dotsClass: 'blog__dots',
		appendDots: '.blog__wrapper',
	});
});
