$(document).ready(function() {


	$.getJSON( "/winnerslast10.json", function( winnerTopList ) {
		var html = '';
		$.each(winnerTopList, function(index) {
		    // console.log(winnerTopList[index].gameLogoSmall);
		    html += '<div class="promo__slide"><div class="promo__icon" style="background-image: url('+winnerTopList[index].gameLogoSmall+');">';
		    html += '</div>';
		    html += '<div class="promo__text">';
		    html += '<div class="promo__price">'+winnerTopList[index].winAmount+'</div>';
		    html += '<h3 class="promo__title">'+winnerTopList[index].winnerName+'</h3>';
		    html += '<span class="promo__date">'+winnerTopList[index].timestamp+'</span>';
		    html += '<div class="promo__game">'+winnerTopList[index].gameName+'</div>';
		    html += '<div class="promo__btn">Spil nu</div>';
		    html += '</div></div>';
		});
		// console.log(html);
			$('.js-promo').html(html);
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
	});
	
	// latest winner 7 days, 30 days
	$.getJSON( "/winnersLast7days.json", function( data ) {
	  	putjson(data,'weekly');
	  		
	});
	$.getJSON( "/winnersLast30days.json", function( data ) {
	  	putjson(data,'yearly')
	});


	function putjson(json,id){
		html = ' ';
		i = 0;
		$.each( json, function( index) {
			// items.push( "<li id='" + key + "'>" + val + "</li>" );
			i = i +1;
			hiddenclass = ' ';
			if(i>4){hiddenclass = ' is-hidden';}
			html += '<div class="jack '+hiddenclass+'">';
			html += '	<div class="jack__icon" style="background-image: url('+json[index].gameLogoSmall+')">';
			html += '		';
			html += '	</div>';
			html += '	<div class="jack__text">';
			html += '		<h3>'+json[index].winnerName+'<br>'+json[index].timestamp+'</h3>';
			html += '		<div class="jack__game">'+json[index].gameName+'</div>';
			html += '	</div>';
			html += '	<div class="jack__right">';
			html += '		<div class="jack__sum">'+json[index].winAmount+' kr</div>';
			html += '		<div class="jack__spil">Spil nu</div>';
			html += '	</div>';
			html += '</div>';
		});
		$b = $('#'+id);
		$prev = $b.parent().find('.jacks__top');
		$next = $b.parent().find('.jacks__more');
		$b.html(html).slick({
	  			slidesToShow: 4,
	  		  	slidesToScroll: 1,
	  		  	vertical: true,
	  		  	infinite: true,
	  			autoplay: true,
	  	  		autoplaySpeed: 3000,
	  	  		speed: 1000,
	  	  		prevArrow: $prev,
	  	  		nextArrow: $next,
	  	  		slide: '.jack'
	  		});
	}


	$('.header').hover(function() {
		/* Stuff to do when the mouse enters the element */
	}, function() {
		$('.header__drop').hide();
	});
	$('.js-menu').hover(function() {
		$('.header__drop').show();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});

	// $('.jacks__more').click(function(event) {
	// 	$(this).hide();
	// 	$(this).parent().find('.is-hidden').show();
	// 	return false;
	// });
	// click(function(event) {
	// 	$('.header__drop').toggle();
	// });
	$('.js-slider').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	infinite: true,
		arrows: true,
		dots: true,
		prevArrow: $('.topslider__prev'),
		nextArrow: $('.topslider__next'),
		autoplay: true,
  		autoplaySpeed: 5000,
  		fade: true,
  		cssEase: 'linear',
  		speed: 600,
	})

		
	
	$('.gnav__section').click(function(event) {
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		$('.gamewrap').hide();
		$('#gamewrap'+$(this).data('section')).show();
		return false;
	});
});