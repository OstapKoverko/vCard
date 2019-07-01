///////////////////////////////////////
////////////// LOADING ////////////////
///////////////////////////////////////

jQuery(document).ready(function($) {
  // PERFECT SCROLLBAR
  $('.tab-content').perfectScrollbar({
    wheelSpeed: 0.9
  });

  // TESTIMONIALS CAROUSEL
  // Need to be fixed
  // $('#testimonials-slider').owlCarousel({
  //   singleItem: true,
  //   slideSpeed: 300,
  //   autoPlay: true,
  //   stopOnHover: true,
  //   responsive: true
  // });

  // Show Alert Function
  function ShowAlert() {
    document.getElementById('alert').style.display = 'block';
  }

  // Close Alert Function
  function CloseAlert() {
    document.getElementById('alert').style.display = 'none';
  }
});
