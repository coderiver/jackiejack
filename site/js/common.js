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
		nextArrow: $('.promo__next'),
		autoplay: true,
  		autoplaySpeed: 2000
	})
	$('.gnav__section').click(function(event) {
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		$('.gamewrap').hide();
		$('#gamewrap'+$(this).data('section')).show();
		return false;
	});
});