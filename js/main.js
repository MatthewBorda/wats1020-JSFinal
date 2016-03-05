
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
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);  

});
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

