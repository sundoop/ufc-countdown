$(document).ready(function() {
  // your code
  //alert('Page: ' + $('title').html() + ' dom loaded!');
  var events = getEvents();
  // wire up 
  setupListofEvents(events);
  
  setupCurrentEvent(events[0]);
});


var getEvents = function() {
    var events_obj = {"events": [{"date": "Saturday, September 21", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/UFC165/Jon-Jones-Alexander-Gustafsson/fight_226127_mediumThumbnail.png", "location": "Toronto, Ontario", "title": "UFC 165 Live on Pay-Per-View"}, {"date": "Wednesday, October 9", "time": "7PM/4PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_235499_mediumThumbnail.png", "location": "Barueri, Brazil", "title": "UFC FIGHT NIGHT Maia vs. Shields"}, {"date": "Saturday, October 19", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/UFC166/Cain-Velasquez-Junior-Dos-Santos/fight_230665_mediumThumbnail.png", "location": "Houston, Texas", "title": "UFC 166 Live on Pay-Per-View"}, {"date": "Saturday, October 26", "time": "3PM/12PM", "img_url": "http://media.ufc.tv/generated_images_sorted/ufc-fight-night-bisping-munoz/Michael-Bisping-Mark-Munoz/fight_233365_mediumThumbnail.png", "location": "Manchester, England", "title": "UFC Fight Night Bisping vs. Munoz"}, {"date": "Wednesday, November 6", "time": "8PM/5PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_236149_mediumThumbnail.png", "location": "Fort Campbell, Kentucky", "title": "UFC Fight Night Fight For The Troops"}, {"date": "Saturday, November 9", "time": "7PM/4PM", "img_url": "http://media.ufc.tv/generated_images_sorted/ufn-belfort-henderson/Vitor-Belfort-Dan-Henderson/fight_237105_mediumThumbnail.png", "location": "Goiania, Brazil", "title": "UFC Fight Night Belfort vs. Henderson"}, {"date": "Saturday, November 16", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/UFC167/Georges-St-Pierre-Johny-Hendricks/fight_230721_mediumThumbnail.png", "location": "Las Vegas, Nevada", "title": "UFC 167 Live on Pay-Per-View"}, {"date": "Saturday, November 30", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted/TUF18-Finale/Gray-Maynard-Nate-Diaz/fight_239452_mediumThumbnail.png", "location": "Las Vegas, Nevada", "title": "TUF 18 Finale Live on FOX Sports 1"}, {"date": "Friday, December 6", "time": "9PM/6PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_239494_mediumThumbnail.png", "location": "Brisbane, Qld", "title": "UFC Fight Night Hunt vs. Bigfoot"}, {"date": "Saturday, December 28", "time": "10PM/7PM", "img_url": "http://media.ufc.tv/generated_images_sorted//fight_232141_mediumThumbnail.png", "location": "Las Vegas, Nevada", "title": "UFC 168 Live on Pay-Per-View"}]};
    return events_obj.events;
};


var setupListofEvents = function(events){
    
    var list_txt = "";

	$.each(events,function(index,event) {
		console.log(event);
		list_txt += '<li> <a href="#">'+ event.title + '</a></li>\n';
     //console.log("stuff:" + val + "::" + text + "\n");
	});

	$("#event_list").html(list_txt);
};

var setupCurrentEvent = function(event) {

	// setup title
	$("#fight_title").text(event.title);

	// setup countdown
};