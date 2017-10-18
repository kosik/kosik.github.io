;(function(){
	'use strict';

	//SLIDER
	$('.slider').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: true,
	 dots: true,
	 slide: 'div'
	});

	$('.slider-multiple').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: true,
	 dots: true,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 slide: 'div'
	});

	$('.slider-rows-multiple').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: true,
	 dots: true,
	 slide: 'div',
	 slidesPerRow: 3,
	 rows: 2
	});

	$('.slider-multiple-without-arrows').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: false,
	 dots: true,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 slide: 'div'
	});


})();
