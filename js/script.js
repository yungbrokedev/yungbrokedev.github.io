$(document).ready(function(){

	/* Инициализация слайдера  */
	$(".slider").owlCarousel({
	  	items:1,
	  	nav:false,
	  	loop:true
	});

	/*  Показывать.скрывать меню по клику на бургер */
	$('.burger').click( function(){
		$(this).toggleClass('close');
		$('.menu').toggleClass('visible');
	});


	/*  Анимация для якоря */
	$(".button-bottom__button").click(function (event) {
		event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	/*  Плэй-пауза */
	$(".video__play").click(function (event) {
		event.preventDefault();
		$('.video__controls').toggleClass('stop');

	});

});
