var didScroll,lastScrollTop=0,delta=5,navbarHeight=$(".main-header").outerHeight();function hasScrolled(){var l=$(this).scrollTop();Math.abs(lastScrollTop-l)<=delta||(l>lastScrollTop&&l>0?$(".main-header").removeClass("nav-down").addClass("nav-up"):l+$(window).height()<$(document).height()&&$(".main-header").removeClass("nav-up").addClass("nav-down"),lastScrollTop=l)}$(window).scroll((function(l){didScroll=!0})),setInterval((function(){didScroll&&(hasScrolled(),didScroll=!1)}),250),jQuery((function(l){l(".logos_list ul li a").length&&l(".logos_list ul li a").click((function(l){l.preventDefault()}))}));