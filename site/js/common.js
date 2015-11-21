$(document).ready(function() {

	winnerTopList = [{"winnerName":"Test T.","currencySymbol":"$","winAmount":"5850.00","timestamp":"17/11 - 11:58 GMT","gameName":"Millionaire Club 3","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"GB","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Andreas C.","currencySymbol":"£","winAmount":"5128.00","timestamp":"17/11 - 22:47 GMT","gameName":"Foxin wins again","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"GB","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Lisa C.","currencySymbol":"$","winAmount":"4540.00","timestamp":"18/11 - 02:02 GMT","gameName":"Reel Rush","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"AU","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Tero H.","currencySymbol":"?","winAmount":"4501.00","timestamp":"17/11 - 13:07 GMT","gameName":"Gonzo\u0027s Quest","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"FI","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Sami L.","currencySymbol":"?","winAmount":"3061.00","timestamp":"17/11 - 10:38 GMT","gameName":"Steam Tower","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"FI","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Maroun E.","currencySymbol":"$","winAmount":"2770.50","timestamp":"17/11 - 14:28 GMT","gameName":"Jack and the Beanstalk","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"AE","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Nina J.","currencySymbol":"kr","winAmount":"26070.00","timestamp":"17/11 - 20:47 GMT","gameName":"Gonzo\u0027s Quest","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"NO","currencyFactor":10,"currencyAlignment":"R"},{"winnerName":"Rahim M.","currencySymbol":"kr","winAmount":"25330.00","timestamp":"17/11 - 23:44 GMT","gameName":"FUNtastic Pets","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"SE","currencyFactor":10,"currencyAlignment":"R"},{"winnerName":"Nadia V.","currencySymbol":"?","winAmount":"2435.00","timestamp":"17/11 - 23:35 GMT","gameName":"Reel Rush","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"FR","currencyFactor":1,"currencyAlignment":"L"},{"winnerName":"Pascal R.","currencySymbol":"?","winAmount":"2038.00","timestamp":"17/11 - 17:51 GMT","gameName":"Subtopia","gameLogoSmall":"//cdn.jackiejackpot.com/games/fallbackSmallGameLogo.jpg","gameLogoBig":"//cdn.jackiejackpot.com/games/fallbackBigGameLogo.jpg","countryCode":"FR","currencyFactor":1,"currencyAlignment":"L"}];
	var html = '';
	// console.log(winnerTopList);
	$.each(winnerTopList, function(index) {
	    // console.log(winnerTopList[index].gameLogoSmall);
	    html += '<div class="promo__slide"><div class="promo__icon">';
	    html += '<img src="http:'+winnerTopList[index].gameLogoSmall+'" alt="">';
	    html += '</div>';
	    html += '<div class="promo__text">';
	    html += '<div class="promo__price">'+winnerTopList[index].winAmount+'</div>';
	    html += '<h3 class="promo__title">'+winnerTopList[index].winnerName+'</h3>';
	    html += '<span class="promo__date">'+winnerTopList[index].timestamp+'</span>';
	    html += '<div class="promo__game">'+winnerTopList[index].gameName+'</div>';
	    html += '</div></div>';
	});
	// console.log(html);
	$('.js-promo').html(html);



	// latest winner 7 days, 30 days
	$.getJSON( "/winnersLast7days.json", function( data ) {
		console.log(data);
	  	putjson(data,'weekly')
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
			html += '	<div class="jack__icon">';
			html += '		<img src="'+json[index].gameLogoSmall+'" width="73" height="73" alt="">';
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
		$('#'+id).html(html);
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

	$('.jacks__more').click(function(event) {
		$(this).hide();
		$(this).parent().find('.is-hidden').show();
		return false;
	});
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
  		 speed: 1000,
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