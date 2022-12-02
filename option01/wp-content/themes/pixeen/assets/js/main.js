(function ($) {
    'use strict';

    /*------------- preloader js --------------*/
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})


	// menu-last class
	$('.mainmenu nav > ul > li').slice(-4).addClass('menu-last');


    // 05. Data-Background Js
    $("[data-background]").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    function bannerActive() {
	    $("[data-background]").each(function () {
	        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	    });
	}    
	function videoActive() {
	    $("[data-background]").each(function () {
	        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	    });
	}

    // background image js
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	/* Search
	-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});


	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1200"
	});

	$('.side-toggle').on('click', function () {
		$('.side-info').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay').on('click', function () {
		$('.side-info').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})

	function mainSlider() {

		// 05. Data-Background Js
	    $("[data-background]").each(function () {
	        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	    });
		// bannerSlide 

		var autoplays =  $(".hero").data('s-autoplay') == true ? true : false;
		var nav =  $(".hero").data('s-nav') == true ? true : false;
		var dots =  $(".hero").data('s-dots') == true ? true : false;
		var autoplay_speed =  $(".hero").data('s-speed') == true ? true : false;
	
		var slider = $('.hero');
		slider.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			smartSpeed: 800,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			loop: true,
			slideSpeed: autoplay_speed,
			nav: nav,
			dots: dots,
			autoplay: autoplays,
			navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false,
				},
				450: {
					items: 1,
					margin: 0,
					nav: false,
				},
				768: {
					items: 1
				},
			}
			
		});

		slider.on('translate.owl.carousel', function () {
			var layer = $("[data-animation]");
			layer.each(function () {
				var s_animation = $(this).data('animation');
				$(this).removeClass('animated ' + s_animation).css('opacity', '0');
			});
		});

		$("[data-delay]").each(function () {
			var animation_del = $(this).data('delay');
			$(this).css('animation-delay', animation_del);
		});

		$("[data-duration]").each(function () {
			var animation_dur = $(this).data('duration');
			$(this).css('animation-duration', animation_dur);
		});

		slider.on('translated.owl.carousel', function () {
			var layer = slider.find('.owl-item.active').find("[data-animation]");
			layer.each(function () {
				var s_animation = $(this).data('animation');
				$(this).addClass('animated ' + s_animation).css("opacity", "1");
			});
		});
	}

	function userActive() {
	// partner
	var brand = $('.brand-carousel');
	brand.owlCarousel({
		loop: true,
		margin: 30,
		loop: true,
		slideSpeed: 3000,
		nav: false,
		dots: false,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			450: {
				items: 2,
				margin: 0
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			},
			1500: {
				items: 5
			}
		}
	});

  }

	function testimonialActive() {

	//about testimonial 
	  $('.testimonial-active').slick({
		infinite: false,
		arrows: false,
		autoplay:true,
		autoplaySpeed:3000,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow:'<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 1,
			  }
			},
		  ]
	  });

    // Testimonial js
	var testimonial = $('.testimonial');
	testimonial.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		nav: false,
		dots: false,
	});

	var testimonial2 = $('.testimonial__2');
	testimonial2.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		dots: false,
		nav: true,
		navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
	});

	var testimonial3 = $('.testimonial__3');
	testimonial3.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		dots: false,
		nav: true,
		navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
	});
     

   }

	// postbox_gallery active
	var gallery = $('.post_gallery');
	gallery.owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 800,
		nav: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		dots: false,
		nav: true,
		navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
		dots: false,
	});

	// js - tilt
	if ($(".js-tilt").length) {
		$('.js-tilt').tilt();
	}

	// Activate lightcase
	$('a[data-rel^=lightcase]').lightcase();

	// Nice select js
	$('select').niceSelect();

	// Active Odometer Counter 
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});

	// Active wow js
	new WOW().init();

	// remove faq active class
	$(".card__header").on("click", function () {
		$(".btn-link").removeClass("active");
	});


    // 19. Masonary Js
    $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        });


        // filter items on button click
        $('.masonary-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });

        //for menu active class
        $('.masonary-menu button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});	

	/* magnificPopup video view */
	$('.popup-image').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
		  enabled: true
		}
	});

	$(window).on('elementor/frontend/init', function () {
	    elementorFrontend.hooks.addAction('frontend/element_ready/slider.default', mainSlider);
	    elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_slider.default', testimonialActive);
	    elementorFrontend.hooks.addAction('frontend/element_ready/brand.default', userActive);
	    elementorFrontend.hooks.addAction('frontend/element_ready/banner.default', bannerActive);
	    elementorFrontend.hooks.addAction('frontend/element_ready/video_info.default', videoActive);
	});

})(jQuery);

