/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$( document  ).ready(function() {
  // Instantiate MixItUp:

	$('#Container').mixItUp();

// Map data
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// 	place holder for LL to pull tile
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

//Open street map layer	
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

//Set view of map
var map = L.map('map-container').setView([47.6553, -122.5350], 10);
// Layer control box

osm.addTo(map);
  var circle = L.circle([47.6553, -122.5350], 10000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);	

// http://www.gascoignelumber.com/
// http://www.cedarproductsco.com/
// http://www.smythlumbermill.com/ 
// http://www.fritchmill.com/
//  http://www.dunnlumber.com/?utm_source=gp_sea&utm_medium=link&utm_campaign=d_glocal
  //http://www.seconduse.com/
// http://ewsalvage.com/  
//   http://ballardreuse.com/
  
// carousel
var $myCarousel = $('#carousel-example-generic');

// Initialize carousel
$myCarousel.carousel();
	
  function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';
  
  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    // Add animate.css classes to
    // the elements to be animated 
    // Remove animate.css classes
    // once the animation event has ended
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

// Select the elements to be animated
// in the first slide on page load
var $firstAnimatingElems = $myCarousel.find('.item:first')
                           .find('[data-animation ^= "animated"]');

// Apply the animation using our function
doAnimations($firstAnimatingElems);

// Pause the carousel 
$myCarousel.carousel('pause');

// Attach our doAnimations() function to the
// carousel's slide.bs.carousel event 
$myCarousel.on('slide.bs.carousel', function (e) { 
  // Select the elements to be animated inside the active slide 
  var $animatingElems = $(e.relatedTarget)
                        .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});
	

});


