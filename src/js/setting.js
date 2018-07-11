jQuery(window).on("load",function() {
	"use strict";
	jQuery(".pre-loader").fadeToggle("medium");
	// var $container = $('.gallery-masonry');
	// $container.isotope({
	// 	itemSelector: 'li',
	// 	percentPosition: true,
	// 	animationOptions: {
	// 		duration: 750,
	// 		easing: 'linear',
	// 		queue: false
	// 	}
	// });
});
jQuery(document).ready(function(){
	"use strict";
	var headerheight = jQuery('.header-wrap.fixed-header').height();
	var mainbanner = jQuery('.main-banner').height();
	// Background images
	jQuery(".bg_img").each( function ( i, elem ) {
		var img = jQuery( elem );
		jQuery(this).hide();
		jQuery(this).parent().css( {
			background: "url(" + img.attr( "src" ) + ") no-repeat center center",
		});
	});

	$(".gallery-photo").colorbox({
		//rel:'group1',
		classname: "true",
		slideshow: !0,
		slideshowAuto: !0,
		scalePhotos: !0,
		maxWidth: 80 + "%",
		title: function(){
			var url = $(this).attr('href');
			return '<a href="gallery.php" class="view-photo-link">view photo gallery</a>';
		},
		onOpen:function(){
			$("#colorbox").addClass("gallery-photo-popup");
			$('body').css({ 'overflow-y': 'hidden !important' });
		},
		onClosed: function(){
			$('body').css({ overflow: '' });
		}
	});

	$(".gallery-masonry .bg-photo").colorbox({
		rel:'.gallery-masonry .bg-photo',
		classname:"true",
		transition:"fade",
		slideshow: 0,
		slideshowAuto: 0,
		scalePhotos: !0,
		maxWidth: 80 + "%",
		onOpen: function(){
			$("#colorbox").addClass("gallery-photo-popup");
		}
	});

	if (jQuery(window).width() < 767) {
		jQuery(".popup-video").colorbox({
			iframe:true,
			classname:"true",
			innerWidth: 80 + "%",
			maxWidth: 640 + "px",
			innerHeight: 80 + "%",
			maxHeight: 390 + "px",
			slideshow: !0,
			slideshowAuto: !0,
			scalePhotos: !0,
		});
	}
	else{
		$(".popup-video").colorbox({
			iframe:true,
			classname:"true",
			innerWidth:640,
			innerHeight:390,
			slideshow: !0,
			slideshowAuto: !0,
			scalePhotos: !0,
			maxWidth: 640 + "px",
			onOpen: function(){
				$("#colorbox").addClass("gallery-photo-popup");
			}
		});
	}

	// left menu
	jQuery('.menu-btn a').click(function(){
		jQuery('.mobile-header').toggleClass('open');
		jQuery('.mobile-header').fadeToggle('');
	});

	// jQuery(document).bind('touchstart click', function(e){
	// 	if(jQuery(e.target).parents('.leftmenu').length ==0 && !jQuery(e.target).is('.menu-btn a')){
	// 		jQuery('.leftmenu').removeClass('open');
	// 		//jQuery('.leftmenu').slideUp("slow");
	// 	}
	// });

	var link = jQuery(".leftmenu li span");
	link.on('click', function(e) {
		e.preventDefault();
		var a = jQuery(this).data("id");
		jQuery("ul#"+a).slideToggle(400);
		jQuery("div#"+a).slideToggle(400);
		jQuery(this).toggleClass('open');
	});

	var time = 2;
	var $bar,
		$slick,
		isPause,
		tick,
		percentTime;

	$slick = $('.home-slider');
	$slick.slick({
		draggable: true,
		adaptiveHeight: false,
		dots: true,
		arrows: false,
		mobileFirst: true,
		swipe: false,
		fade : true,
		pauseOnDotsHover: true,
		autoplaySpeed: 4000,
		speed: 700,
	});
	$bar = $('.slider-progress .progress');
	$('.pause').on('click', function() {
		isPause = true;
		$('.pause').hide();
		$('.play').show();
	});
	$('.play').on('click', function() {
		isPause = false;
		startProgressbar();
		$('.play').hide();
		$('.pause').show();
	});
	$('.home-slider .slick-dots li').on('click', function() {
		if(isPause == false){
			console.log("here", isPause);
			startProgressbar();
			$('.play').hide();
			$('.pause').show();
		}else{
			console.log("here", isPause);
			resetProgressbar();
			isPause = true;
			$('.play').show();
			$('.pause').hide();
		}

	});
	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}
	function interval() {
		if(isPause === false) {
			percentTime += 1 / (time+0.8);
			$bar.css({
				width: percentTime+"%"
			});
			if(percentTime >= 100)
			{
				$slick.slick('slickNext');
				startProgressbar();
			}
		}
	}
	function resetProgressbar() {
		$bar.css({
			width: 0+'%'
		});
		clearTimeout(tick);
	}
	startProgressbar();

});
jQuery(window).on('resize load ready',function () {
	if (jQuery(window).width() > 1000) {
		jQuery('.mobile-header').fadeOut();
	}
	if (jQuery(window).width() < 767) {
		jQuery(".popup-video").colorbox.resize({
			innerWidth: 80 + "%",
			maxWidth: 640 + "px",
			innerHeight: 80 + "%",
			maxHeight: 390 + "px"
		});
	}
	else{
		$(".popup-video").colorbox.resize({
			iframe:true,
			classname:"true",
			innerWidth:640,
			innerHeight:390,
			slideshow: !0,
			slideshowAuto: !0,
			scalePhotos: !0,
			maxWidth: 640 + "px",
			onOpen: function(){
				$("#colorbox").addClass("gallery-photo-popup");
			}
		});
	}
});
// header on scroll class add
jQuery(window).on('scroll', function () {
	if ( jQuery(this).scrollTop() > 500 ) {
		jQuery('.header-wrap.fixed' ).addClass( "sticky" );
	} else {
		jQuery('.header-wrap.fixed' ).removeClass( "sticky" );
	}
});