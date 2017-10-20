;(function(){
	'use strict';

	$("._scroll-to").click(function(e) {
		e.preventDefault()

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 700);
	});

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
		autoplay: false,
		autoplaySpeed: 4000,
		arrows: true,
		dots: true,
		slide: 'div'
	});

	$('.slider-multiple').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: true,
	//  dots: true,
	 dots: false,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 slide: 'div'
	});

	$('.slider-rows-multiple').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: true,
	//  dots: true,
	 dots: false,
	 slide: 'div',
	//  slidesPerRow: 3,
	//  rows: 2
	});

	$('.slider-multiple-without-arrows').slick({
	 autoplay: true,
	 autoplaySpeed: 4000,
	 arrows: false,
	//  dots: true,
	 dots: false,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 slide: 'div'
	});

	// $('#third .bee-button').magnificPopup({
	// 	items: {
	//         src: '#modal_popup',
	//         type: 'inline'
	//     },
	// 	callbacks: {
	// 		open: function() {
	// 			$('#modal-slider').slick({
	// 				autoplay: false,
	// 				arrows: true,
	// 				dots: false,
	// 				slide: 'div'
	// 			});
	// 		},
	// 		close: function() {
	// 			$('#modal-slider').slick('unslick')
	// 		}
	// 	}
	// });

	// $('#third .bee-button').leanModal({ overlay: 1 }, () => {
	// 	$('#modal-slider').slick({
	// 		autoplay: false,
	// 		arrows: true,
	// 		dots: false,
	// 		slide: 'div'
	// 	});
	// }, () => {
	// 	$('#modal-slider').slick('unslick')
	// })


	// On swipe event
	$('#second .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(this).attr('active', nextSlide + 1)
	});

})();
