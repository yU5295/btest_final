/**
Core script to handle the entire theme and core functions
**/
var Frost = function(){
	/* Search Bar ============ */
	var screenWidth = $( window ).width();
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if($(".countdown").length)
		{
			$('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	
	var handleCustomScroll = function(){
		/* all available option parameters with their default values */
		if($(".content").length > 0)
		{ 
			if($(".content").hasClass('scroll-off'))
			{
				if(screenWidth > 900)
				{
					$(".content").mCustomScrollbar({
						setWidth:false,
						setHeight:false,
						axis:"y"
					});	
				}					
			}
			else
			{
				$(".content").mCustomScrollbar({
					setWidth:false,
					setHeight:false,
					axis:"y"
				});	
			}
			
			//screenWidth
			
		}
	}
	
	var kenburnSlider = function(){
		if($("#kenburn").length > 0)
		{ 
			$("#kenburn").slippry({
				 transition: 'kenburns',
				 useCSS: true,
				 speed: 8000,
				 pause: 3000,
				 auto: true,
				 preload: 'visible',
				 autoHover: false
			});
		}
	}
	
	var parallex = function(){
		if($(".parallax").length > 0)
		{ 
			var currentX = '';
			var currentY = '';
			var movementConstant = .015;
			$(document).on('mousemove',function(e) {
				  if(currentX == '') currentX = e.pageX;
				  var xdiff = e.pageX - currentX;
				  currentX = e.pageX;
				   if(currentY == '') currentY = e.pageY;
				  var ydiff = e.pageY - currentY;
				  currentY = e.pageY; 
				  $('.parallax div').each(function(i, el) {
					  var movement = (i + 1) * (xdiff * movementConstant);
					  var movementy = (i + 1) * (ydiff * movementConstant);
					  var newX = $(el).position().left + movement;
					  var newY = $(el).position().top + movementy;
					  $(el).css('left', newX + 'px');
					  $(el).css('top', newY + 'px');
				  });
			});
		}
	}
	

		
	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear(); 
	/* Website Launch Date END */ 
	
	
	/* WOW ANIMATION ============ */
	var wow_animation = function(){
		if($('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      // animated element css class (default is wow)
			  animateClass: 'animated', // animation css class (default is animated)
			  offset:       -200,          // distance to the element when triggering the animation (default is 0)
			  mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	
	var handlePlaceholderAnimation = function()
	{
		if(jQuery('.dezPlaceAni').length)
		{
		
			$('.dezPlaceAni input, .dezPlaceAni textarea').on('focus',function(){
			  $(this).parents('.form-group, .news-box').addClass('focused');
			});
			
			$('.dezPlaceAni input, .dezPlaceAni textarea').on('blur',function(){
			  var inputValue = $(this).val();
			  if ( inputValue == "" ) {
				$(this).removeClass('filled');
				$(this).parents('.form-group, .news-box').removeClass('focused');  
			  } else {
				$(this).addClass('filled');
			  }
			})
		}
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		'use strict';
		/* masonry by */
		if(jQuery('#masonry, .masonry').length)
		{
			var self = $("#masonry, .masonry");
			if(jQuery('.card-container').length)
		    {
				self.imagesLoaded(function () {
					self.masonry({
						gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container"
					});
				});
			}
		}
		/* masonry by end */
	}
	
	/* Light Gallery ============ */
	var lightGallery = function (){
		if(($('#lightgallery, .lightgallery').length > 0)){
			$('#lightgallery, .lightgallery').lightGallery({
				selector : '.check-km',
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
	}
	
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	/* Function ============ */
	return {
		init:function(){
			masonryBox();
			wow_animation();
			handleCountDown(WebsiteLaunchDate);
			handleSideBarMenu();
			handlePlaceholderAnimation();
			lightGallery();
			kenburnSlider();
			parallex();
			jQuery('.modal').on('show.bs.modal', reposition);
		},
		load:function(){
			handleCustomScroll();
		},
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
  Frost.init();
});
/* Document.ready END */
/* Window Load START */
jQuery(window).on("load", function (e) {
	Frost.load();
	setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 0);
});
/*  Window Load END */