$(document).ready(function() {
	$('.js-menu').click(function(event) {
		$('.header__drop').toggle();
	});
	$('.js-slider').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	infinite: true,
		arrows: true,
		dots: true,
		prevArrow: $('.topslider__prev'),
		nextArrow: $('.topslider__next')
	})
	$('.js-promo').slick({
		slidesToShow: 3,
	  	slidesToScroll: 1,
	  	infinite: true,
		arrows: true,
		dots: false,
		prevArrow: $('.promo__prev'),
		nextArrow: $('.promo__next')
	})
});