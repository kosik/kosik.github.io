;(function(){
	'use strict';

	(function assignHelpButtons(){
		const beeButtons = $('#help-slider .bee-button')

		let tripleIterator = 0

		beeButtons.each(function(){
			tripleIterator++
			$(this).addClass('help-button-' + tripleIterator)

			if (tripleIterator === 3) tripleIterator = 0
		})
	})();

	(function assignBadges(){
		const badges = $('#resources-slider .honeycombs-badge')

		let tripleIterator = 0

		badges.each(function(){
			tripleIterator++
			$(this).addClass('badge-' + tripleIterator)

			if (tripleIterator === 3) tripleIterator = 0
		})
	})();

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
