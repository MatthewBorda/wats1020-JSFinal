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
  
// Calendar
  $(document).ready(function() {
  var lastClickedElement = null;
  var currMonth, currYear;
  var initTemplateCalendar = function(id, month, year) {
    var $cal = $(id);
    $cal = $($cal[0]);
    var arrayDayShort = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var arrayDayLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var holidays = [{
      date: "Sep 19, 2016",
      holiday: "Labour Day"
    }];
    var imageCollection = ["http://newpartners.uatisready.com/images/listings/CBCFlightofWhite1920x800_2628606653001467481.jpg?res=200", "http://newpartners.uatisready.com/images/listings/hist1_7854081356274510997.jpg?res=200", "http://newpartners.uatisready.com/images/listings/sens_2391958875910645713.jpg?res=200", "http://newpartners.uatisready.com/images/listings/1920800Garden_4119985474150635077.jpg?res=200", "http://newpartners.uatisready.com/images/listings/f044fa55-d527-4807-abbe-2d315a26c150.jpg?res=200"];

    console.log('Creating Calendar...');
    console.info('Month: '+month);
    console.info('Year: '+year);
    currMonth = month;
    currYear = year;
    month = month - 1;
    var d = new Date(year, month);
    

    //Table Main Title
    var table = ['<div class="calHeader"><div class="prevMonth">Previous Month</div><div class="monthSelector">' + monthNames[d.getMonth()] + ' ' + d.getFullYear() + '<div class="monthPicker"></div></div><div class="nextMonth">Next Month</div></div>'];

    //Table Header
    table.push('<table><tr class="header">');
    for (var i = 0; i < 7; i++) {
      table.push('<th>' + arrayDayShort[i] + '</th>');
    }
    table.push('</tr><tr>');

    //Table Dates
    for (var i = 0; i < d.getDay(); i++) {
      table.push('<td><div class="dayWrapper"><div class="dayContainer"></div><div class="contentContainer"></div></div></td>');
    }
    while (d.getMonth() == month) {
      table.push('<td><div id="day' + d.getDate() + '" class="dayWrapper">' 
                 + '<div class="dayContainer event">' 
                    + '<div class="dayTitle"></div>' 
                    + '<div class="dayBox">' + padLeftZeroes(d.getDate(), 2) + '</div>' 
                 + '</div>' 
                 + '<div class="contentContainer">' 
                    + '<div class="contentItem"><a href="http://www.google.ca" target="_blank">Lorem ipsum dolor sit amet, consecte</a></div>'
                    + '<div class="contentItem"><a href="http://www.google.ca" target="_blank">Adipiscing elit amet, consectetur</a></div>' 
                    + '<div class="contentItem"><a href="http://www.google.ca" target="_blank">Lorem ipsum dolor sit amet, consecte</a></div>' 
                    + '<div class="contentMore"><a href="https://www.google.ca/?gws_rd=ssl#safe=off&q=do+a+barrel+roll" target="_blank">More ...</a></div>' 
                 + '</div>' 
                 + '</div></td>');
      if (d.getDay() % 7 == 6) {
        table.push('</tr><tr>');
      }
      d.setDate(d.getDate() + 1);
    }

    //Table End Dates
    for (var i = d.getDay(); i < 7; i++) {
      table.push('<td><div class="dayWrapper"><div class="dayContainer"></div><div class="contentContainer"></div></div></td>');
    }
    table.push('</tr></table>');
    $cal.html(table.join('\n'));

    //Set holidays
    for (var i = 0; i < holidays.length; i++) {
      var hd = new Date(Date.parse(holidays[i].date));
      if(hd.getMonth()===currMonth-1){
        var id = '#day' + hd.getDate();
        setDayStyle(id, 'holiday');
        $(id + ' .dayTitle').html(holidays[i].holiday);
      }
    }
    
    //Select event
    $cal.find('.dayWrapper').click(function() {
      //reset last selected
      removeDayStyle(lastClickedElement, 'selected');
      lastClickedElement = this;
      if ($(this).find('.dayContainer').hasClass('event')) {
        setDayStyle(this, 'selected');
      }
    });
    
    //Randomly put images on i=number of images
    for(var i=0;i<9;i++){
      var image = imageCollection[getRandomIntInclusive(0,4)];
      var dayTag = '#day' + getRandomIntInclusive(1,31);
      $(dayTag + ' .dayContainer').css('background', 'url("'+image+'")');
    }
    
    //Month selector click
    $('.monthSelector').click(function(){
      var $mPicker = $('.monthPicker');
      if($mPicker.css('display')==="none"){
        $mPicker.slideDown();
      }else{
        $mPicker.slideUp();
      }
    });
    
    //Populate monthSelector with next 11 months
    var monthDivs = [];
    var iterMonth = currMonth +1;
    var iterYear = currYear;
    for(var i=0; i<11;i++){
      var monthName = monthNames[iterMonth - 1];
      var yearName = iterYear;
      monthDivs.push('<div class="monthPickerItem" data-month="'+iterMonth+'" data-year="'+yearName+'">'+ monthName + ' ' + yearName +'</div>');
      if(iterMonth===12){ iterMonth = 1; iterYear++; }
      else{ iterMonth++; }
    }
    $('.monthPicker').append(monthDivs.join('\n'));
    
    $('.monthPickerItem').click(function(e){
      // console.log(e);
      var targProps = e.target.attributes;
      var month = parseInt(targProps["data-month"].value);
      var year = parseInt(targProps["data-year"].value);
      if(month && year){
       initTemplateCalendar('#calendar',month,year); 
      }
    });
   
    $('.nextMonth, .prevMonth').click(function(e){
      if(e.target.className==="prevMonth"){
        // console.log('prev');
        //month should be 0 based but due to correction in init func, we use 1 base
        if(currMonth===1){ 
          currMonth = 12;
          currYear--;
        }else{
          currMonth--;
        }
      }else if(e.target.className==="nextMonth"){
        // console.log('next');
        if(currMonth===12){ 
          currMonth = 1;
          currYear++;
        }else{
          currMonth++;
        }
      }
      // console.log(currMonth);
      // console.log(currYear);
      initTemplateCalendar('#calendar',currMonth,currYear);
    });

    function setDayStyle(id, cssClass) {
      $(id).find('.dayContainer, .contentContainer, .dayTitle, .dayBox, .contentItem, .contentMore').addClass(cssClass);
    }

    function removeDayStyle(id, cssClass) {
      $(id).find('.dayContainer, .contentContainer, .dayTitle, .dayBox, .contentItem, .contentMore').removeClass(cssClass);
    }

    function padLeftZeroes(obj, padLength) {
      if (!obj.toString().length || obj.length > padLength) return obj;
      var str = obj.toString();
      var newStr = "";
      for (var i = 0; i < padLength; i++) {
        if (i > padLength - str.length - 1) {
          newStr = newStr + str;
          return newStr;
        }
        newStr = newStr + "0";
      }
    }
    
    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  initTemplateCalendar('#calendar',9,2016);

});
  
});
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

