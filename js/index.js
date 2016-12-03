jQuery(document).ready(function ($) {

	// PERFECT SCROLLBAR
  $('.tab-content').perfectScrollbar({
  	wheelSpeed: 0.9
	});

  // TESTIMONIALS CAROUSEL
 	$("#testimonials-slider").owlCarousel({
  	singleItem: true,
    slideSpeed: 300,
    autoPlay: true,	
    stopOnHover: true,
    responsive:true
  });
});

