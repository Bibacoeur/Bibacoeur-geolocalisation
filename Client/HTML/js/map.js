// JavaScript Document
google.maps.event.addDomListener(window, 'load', initialize);
	
function initialize() {
	
	//On crée un objet comportant la position du joueur	
	var  joueur_position = {};
	
	//le style de la carte
	var myStyles =[
    	{
        	featureType: "poi",
        	elementType: "labels",
        	stylers: [
       					{ visibility: "off" }
       				 ]
    	}
	];


	function loadmap(position) {
	
		var mapOptions = {
    	zoom: 18,
    	center: new google.maps.LatLng(position.currentlat, position.currentlong),
		styles : myStyles,
		streetViewControl: false
  		};
	
	 	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	 
	 	var position_options = {
	  		strokeColor: '#FF0000',
      		strokeOpacity: 0.8,
      		strokeWeight: 2,
      		fillColor: '#FF0000',
      		fillOpacity: 0.35,
      		map: map,
      		center: mapOptions.center,
      		radius: 35,
   	 	};
	
		displaycurrentposition = new google.maps.Circle(position_options);
	
		// Define the LatLng coordinates for the polygon's path.
  		var GICoords = [
    		new google.maps.LatLng(45.78272115660313, 4.872586727142334),
			new google.maps.LatLng(45.78311770592766, 4.874560832977295),
			new google.maps.LatLng(45.78267626404904, 4.874989986419678),
			new google.maps.LatLng(45.78234705088116, 4.872919321060181)
  		];
  
  		var BMCCoords = [
     		new google.maps.LatLng(45.78226100621001, 4.876572489738464),
			new google.maps.LatLng(45.78238820263345, 4.877200126647949),
			new google.maps.LatLng(45.78266878195318, 4.877082109451294),
			new google.maps.LatLng(45.78255655039474, 4.876207709312439)
  		];

  		// On construit les zones
  		var GI = new google.maps.Polygon({
    		paths: GICoords,
    		strokeColor: '#00FFFF',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#00FFFF',
    		fillOpacity: 0.35
  		});
  
   		var BMC = new google.maps.Polygon({
    		paths: BMCCoords,
    		strokeColor: '#FF0000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#FF0000',
    		fillOpacity: 0.7
  		});

  		GI.setMap(map);
  		BMC.setMap(map);
  
  		google.maps.event.addListener(GI,'click', function() {
	  	window.location.href="GI.html";
  		})
	};

  	navigator.geolocation.getCurrentPosition(onSuccess, onError);
  
  	//géolocalisation : off
    function onError(error) {
		alert(' activer geolocalisation');
		joueur_position.currentlat = 45.78272115660313;
		joueur_position.currentlong = 4.872586727142334;
		loadmap(joueur_position);
 	} 
  

  	//géolocalisation : on
  	function onSuccess(position) { 
 		joueur_position.currentlat = position.coords.latitude;
		joueur_position.currentlong = position.coords.longitude;
		loadmap(joueur_position);
	}
	
//fin initialize
}
