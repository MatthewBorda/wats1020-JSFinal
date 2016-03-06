
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
<<<<<<< HEAD
  
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
	
=======
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

//   var currentMonth = moment().format('YYYY-MM');
//   var nextMonth    = moment().add('month', 1).format('YYYY-MM');
//   var events = [
//     { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
//     { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
//     { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
//     { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
//   ];

// $('#mini-clndr').clndr( {
//     template: $('#calendar-template').html(),
//     events: events,
//     clickEvents: {
//       click: function(target) {
//         if(target.events.length) {
//           var daysContainer = $('#mini-clndr').find('.days-container');
//           daysContainer.toggleClass('show-events', true);
//           $('#mini-clndr').find('.x-button').click( function() {
//             daysContainer.toggleClass('show-events', false);
//           });
//         }
//       }
//     },
//     adjacentDaysChangeMonth: true
//   });
$('#miniClndr').clndr({
startWithMonth:moment(),
daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  events: [
    {
        date: "2016-03-29",
        and: "anything else",
    }
]
});


});
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:
>>>>>>> master

});


