$(document).ready(function(){
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}
	if (isIE () == 9) {
		$('body').append('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')
		$("html,body").css("overflow","hidden");
	}

	$(".main-slider").owlCarousel({
		 items : 1,
		 autoHeight : true,
		 dots: false,
		 autoplay : true,
		 singleItem:true,
		 nav:true,
		 loop:true,
			navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']
		 }
	);
	$(".review-slider").owlCarousel({
		 items : 1,
		 autoHeight : true,
		 dots: false,
		 autoplay : true,
		 singleItem:true,
		 nav:true,
		 loop:true,
			navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']
		 }
	);
	$('select').niceSelect();

	//vertical slider
	$('.slider-vertical').bxSlider({
	    mode: 'vertical',
	     speed: 500,
	     slideMargin:10,
	     infiniteLoop: true,
	     pager: false,
	     controls: true,
	     slideWidth: 276,
	     moveSlides: 1,
	     adaptiveHeight: true,
	     responsive:true,
	     minSlides: 4,
	     nextText: '<span class="icon-angle-up"></span>',
	     prevText: '<span class="icon-angle-down"></span>'
	  });
	/* ###### For SlideToggle Elements  ######*/
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.header-menu__toggle','.header-menu__el');


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/
	

	
})