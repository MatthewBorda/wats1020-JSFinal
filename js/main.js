
$( document  ).ready(function() {
  // Instantiate MixItUp:

	$('#Container').mixItUp();

// Map data
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// 	place holder for LL to pull tile
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

//Open street map layer	
var osm = new L.TileLayer(osmUrl, {minZoom: 9, maxZoom: 12, attribution: osmAttrib});

//Set view of map
var map = L.map('map-container').setView([47.6553, -122.5350], 10);
// Layer control box

osm.addTo(map);
  var circle = L.circle([47.6553, -122.5350], 18000, {
    color: '#31081F',
    fillColor: '#92AD94',
    fillOpacity: 0.5
}).addTo(map);
	var homeMarker = L.marker([47.6553, -122.5350]).addTo(map).bindPopup("<b>Sheep Dog Woodworking</b>").openPopup();	
	
	var gascoMarker = L.marker([47.6524573,-122.3660059]).addTo(map).bindPopup("<a href=http://www.gascoignelumber.com>Gascoigne Lumber</a>");	
	var cedarMarker = L.marker([47.5934216,-122.7123389]).addTo(map).bindPopup("<a href=http://www.cedarproductsco.com>Cedar Products Co</a>");	
	var smythMarker = L.marker([47.7713512,-122.5571909]).addTo(map).bindPopup("<a href=http://www.smythlumbermill.com>Smyth Lumber Mill</a>");	
	var fritchMarker = L.marker([7.829139,-122.0981151]).addTo(map).bindPopup("<a href=http://www.fritchmill.com>Fritch Mill</a>");	
	var secondMarker = L.marker([47.5747259,-122.3290035]).addTo(map).bindPopup("<a href=http://www.seconduse.com>Second Use</a>");	
	var ewMarker = L.marker([47.5723921,-122.3320308]).addTo(map).bindPopup("<a href=http://www.ewsalvage.com>Earth Wise Architectural Salvage</a>");
	var Marker = L.marker([47.6662128,-122.3817272]).addTo(map).bindPopup("<a href=http://www.ballardreuse.com>Ballard Reuse</a>");	



  
// carousel
var $myCarousel = $('#carousel-example-generic');

// Initialize carousel
$myCarousel.carousel('cycle');
	
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


	
	  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [
    { date: currentMonth + '-' + '04', title: 'First Friday Art Walk', location: 'Downtown Winslow, Bainbridge Island' },
    { date: currentMonth + '-' + '19', title: 'Open House', location: 'Bainbridge Island Workshop' },
    { date: currentMonth + '-' + '23', title: 'Finishing Wood Products Demo', location: 'Bainbridge Artists Resource Network (BARN)' },
    { date: nextMonth + '-' + '01',    title: 'First Friday Art Walk', location: 'Downtown Winslow, Bainbridge Island' }
  ];



  $('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
    events: events,
    clickEvents: {
      click: function(target) {
        if(target.events.length) {
          var daysContainer = $('#mini-clndr').find('.days-container');
          daysContainer.toggleClass('show-events', true);
          $('#mini-clndr').find('.x-button').click( function() {
            daysContainer.toggleClass('show-events', false);
          });
        }
      }
    },
    adjacentDaysChangeMonth: true,
    forceSixRows: true
  });


});
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:




