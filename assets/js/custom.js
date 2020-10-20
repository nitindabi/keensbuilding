	// // Sticky Header
	// let header = document.getElementsByTagName("header")[0];
	// let prevScrollpos = window.pageYOffset;

	// window.onscroll = () => {
	// 	let currentScrollPos = window.pageYOffset;
	// 	if (prevScrollpos > currentScrollPos) {
	// 		header.classList.remove('sticky');
	// 	} else {
	// 		header.classList.add('sticky');
	// 	}
	// 	prevScrollpos = currentScrollPos;
	// }

	$(window).on("load", function() {
	    $('.preloader').fadeOut(1000);
	});

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 500) {
	        $(".header-main-wrap").addClass("sticky");
	    } else {
	        $(".header-main-wrap").removeClass("sticky");
	    }
	});


	$(function() {
	    //Home Top Info SLider Start
	    $('.top-info-slider .owl-carousel').owlCarousel({
	        loop: true,
	        items: 1,
	        margin: 10,
	        animateOut: 'fadeOut',
	        nav: true,
	        dots: false,
	        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"]
	    });
	    //Home Top Info SLider End

	    //Hero SLider Home Start
	    $('.hero-slider-wrap .owl-carousel').owlCarousel({
	        loop: true,
	        items: 1,
	        margin: 10,
	        nav: true,
	        dots: false,
	        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"]
	    });
	    //Hero SLider Home End

	    //Shop Slider Start
	    $('.shop-by-cat-wrap .owl-carousel').owlCarousel({
	        loop: true,
	        stagePadding: 15,
	        margin: 30,
	        nav: true,
	        dots: false,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        autoplayHoverPause: true,
	        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
	        responsive: {
	            0: {
	                items: 1
	            },
	            600: {
	                items: 3
	            },
	            1000: {
	                items: 5
	            },
	            1600: {
	                items: 6
	            }
	        }
	    });
	    //Shop Slider End

	    //Recent Blog Start
	    $('.recent-blog-wrap .owl-carousel').owlCarousel({
	        loop: true,
	        stagePadding: 15,
	        margin: 30,
	        nav: true,
	        dots: false,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        autoplayHoverPause: true,
	        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
	        responsive: {
	            0: {
	                items: 1
	            },
	            600: {
	                items: 2
	            },
	            1000: {
	                items: 3
	            }
	        }
	    });
	    //Recent Blog End


	    //Team Member Start
	    $('.meet-our-team-wrap  .owl-carousel').owlCarousel({
	        loop: true,
	        stagePadding: 15,
	        margin: 30,
	        nav: true,
	        dots: false,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        autoplayHoverPause: true,
	        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
	        responsive: {
	            0: {
	                items: 1
	            },
	            600: {
	                items: 2
	            },
	            1000: {
	                items: 4
	            }
	        }
	    });
	    //Team Member End

	    //Similiar Product Slider Start
	    $('.similiar-product-wrap .owl-carousel').owlCarousel({
	        loop: true,
	        margin: 30,
	        nav: true,
	        dots: false,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        autoplayHoverPause: true,
	        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
	        responsive: {
	            0: {
	                items: 1,
	                margin: 10
	            },
	            600: {
	                items: 2,
	                margin: 15
	            },
	            1000: {
	                items: 3,
	                margin: 15
	            },
	            1300: {
	                items: 3
	            }
	        }
	    });
	    //Similiar Product Slider End
	});

	$(function() {
	    $(".toogle-btn").click(function() {
	        $('body').toggleClass("nav-open");
	        $('body').find('.show').removeClass('show');


	    });
	    $(".overlay").click(function() {
	        $('body').toggleClass("nav-open");
	    });
	});

	$(function() {

	    $('.menu-main-ul li:has(.mega-menu-main-dropdown)').addClass('mega-menu-li');
	    $(".menu-main-ul li:has(.mega-menu-main-dropdown)").append("<small class='fa fa-angle-down'></small>");
	    $(".mega-menu-li small").on("click", function() {
	        $(this).prev(".mega-menu-main-dropdown").slideToggle();
	        $(this).toggleClass("fa-angle-up");
	        $(this).parents(".mega-menu-li").siblings().children("small").removeClass("fa-angle-up");
	        $(this).parents(".mega-menu-li").siblings().children(".mega-menu-main-dropdown").slideUp();
	    });

	});

	$(function() {
	    $('.mega-menu-main li:has(.mega-menu-sub-dropdown)').addClass('mega-menu-li-sub');
	    $(".mega-menu-main li:has(.mega-menu-sub-dropdown)").append("<small class='fa fa-angle-down'></small>");

	    $(".mega-menu-li-sub small").on("click", function() {
	        $(this).prev(".mega-menu-sub-dropdown").slideToggle();
	        $(this).toggleClass("fa-angle-up");
	        $(this).parents(".mega-menu-li-sub").siblings().children("small").removeClass("fa-angle-up");
	        $(this).parents(".mega-menu-li-sub").siblings().children(".mega-menu-sub-dropdown").slideUp();
	    });

	});


	$(function() {
	    $('.select-custom').selectpicker();
	});


	$(function() {
	    $(".faq-tab-content .card .card-header .btn").on("click", function() {
	        $(this).parents(".card").addClass('active-card');
	        $(this).parents(".card").siblings('.card').removeClass("active-card");

	    });
	});


	$(".menu-main-ul > li").hover(
	    function() {
	        $(this).parents('.menu-main-ul').addClass('mega-menu-li-hover');
	    },
	    function() {
	        $(this).parents('.menu-main-ul').removeClass('mega-menu-li-hover');
	    }
	);


	$(".menu-main-ul > li").hover(
	    function() {
	        $(this).addClass('li-hover');
	    },
	    function() {
	        $(this).removeClass('li-hover');
	    }
	);

	$(".mega-menu-main > li").hover(
	    function() {
	        $(this).addClass('li-sub-hover');
	    },
	    function() {
	        $(this).removeClass('li-sub-hover');
	    }
	);













	$(function() {


	    var sync1 = $("#sync1");
	    var sync2 = $("#sync2");
	    var slidesPerPage = 4; //globaly define number of elements per page
	    var syncedSecondary = true;

	    sync1.owlCarousel({
	        items: 1,
	        slideSpeed: 2000,
	        autoplay: true,
	        loop: true,
	        responsiveRefreshRate: 200,
	        nav: false,
	        dots: false,
	        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	    }).on('changed.owl.carousel', syncPosition);

	    sync2
	        .on('initialized.owl.carousel', function() {
	            sync2.find(".owl-item").eq(0).addClass("current");
	        })
	        .owlCarousel({
	            items: slidesPerPage,
	            stagePadding: 50,
	            dots: false,
	            nav: false,
	            smartSpeed: 200,
	            slideSpeed: 500,
	            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	            responsiveRefreshRate: 100
	        }).on('changed.owl.carousel', syncPosition2);

	    function syncPosition(el) {
	        //if you set loop to false, you have to restore this next line
	        //var current = el.item.index;

	        //if you disable loop you have to comment this block
	        var count = el.item.count - 1;
	        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

	        if (current < 0) {
	            current = count;
	        }
	        if (current > count) {
	            current = 0;
	        }

	        //end block

	        sync2
	            .find(".owl-item")
	            .removeClass("current")
	            .eq(current)
	            .addClass("current");
	        var onscreen = sync2.find('.owl-item.active').length - 1;
	        var start = sync2.find('.owl-item.active').first().index();
	        var end = sync2.find('.owl-item.active').last().index();

	        if (current > end) {
	            sync2.data('owl.carousel').to(current, 100, true);
	        }
	        if (current < start) {
	            sync2.data('owl.carousel').to(current - onscreen, 100, true);
	        }
	    }

	    function syncPosition2(el) {
	        if (syncedSecondary) {
	            var number = el.item.index;
	            sync1.data('owl.carousel').to(number, 100, true);
	        }
	    }

	    sync2.on("click", ".owl-item", function(e) {
	        e.preventDefault();
	        var number = $(this).index();
	        sync1.data('owl.carousel').to(number, 300, true);
	    });


	});






	$(document).ready(function() {

	    // Gets the video src from the data-src on each button

	    var $videoSrc;
	    $('.watch-story').click(function() {
	        $videoSrc = $(this).data("src");
	    });
	    console.log($videoSrc);



	    // when the modal is opened autoplay it  
	    $('#myModal').on('shown.bs.modal', function(e) {

	        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
	    })



	    // stop playing the youtube video when I close the modal
	    $('#myModal').on('hide.bs.modal', function(e) {
	        // a poor man's stop video
	        $("#video").attr('src', $videoSrc);
	    })






	    // document ready  
	});



	//--------------03-10-20------------//	

	$(document).ready(function() {
	    jQuery(".mobile-menu").click(function() {
	        jQuery(".small-nav-list").slideToggle();
	        jQuery(".mobile-menu").toggleClass("menu-open");
	        jQuery("li").removeClass("open");
	        jQuery(".sub-open ul").slideUp();
	        jQuery("body").toggleClass("body_fixed");
	    });

	    jQuery(".small-nav-list li ul").each(function() {
	        jQuery(this).before(
	            '<span class="menu_arrow"><i class="fa fa-chevron-down"></i></span>'
	        );
	        jQuery("li").toggleClass("sub-open");
	    });

	    jQuery(".small-nav-list li span.menu_arrow").click(function() {
	        jQuery(this).parent("li").toggleClass("open");
	        jQuery(this).parent().children("ul").slideToggle();
	        jQuery(this).parent().siblings().children("ul").slideUp();
	        jQuery(this).parent().siblings().removeClass("open");
	    });
	});
	//--------------03-10-20--end----------//


	/**Zoom Plugin**/


	$("a.fancy-image").fancybox();