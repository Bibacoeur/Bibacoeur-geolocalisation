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
    	zoom: 17,
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
      		radius: 30,
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
    		strokeColor: '#00FFFF',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#00FFFF',
    		fillOpacity: 0.35
  		});

		
		var Entreprise = new Array();
		Entreprise[0] = {Objet :GI,
						 Chemin : "GI.html",
						 content : [ "<b>GI</b><br/>","<button id='checkin' disabled>Check-in</button><br/>","<button id='info'>Informations</button>"].join("")
						 };
		Entreprise[1] = {Objet :BMC,
						 Chemin : "BMC.html",
						  content : [ "<b>BMC</b><br/>","<button id='checkin' disabled>Check-in</button><br/>","<button id='info'>Informations</button>"].join("")
						 };
		
		//On affiche chaque entreprise sur la carte
		for (var i=0;i<Entreprise.length;i++) {
  			Entreprise[i].Objet.setMap(map);
		};
	
		function islocationonedge (entreprise) {
		var precision_degre = position_options.radius/111000;
	 	if (google.maps.geometry.poly.isLocationOnEdge(mapOptions.center, entreprise,precision_degre)) {
    	return true;
  		}
		else { return false};
		}
		
		

		var infowindow = new google.maps.InfoWindow();
		

		function show_myInfowindow(entreprise,position) {
			infowindow.close();
			var vertices = entreprise.Objet.getPath();

			// Iterate over the vertices.
			for (var i =0; i < vertices.length; i++) {
				var xy = vertices.getAt(i);
			}

			// Replace our Info Window's position
			infowindow.setContent(entreprise.content);
			infowindow.setPosition(position);
			infowindow.open(map);
			if (islocationonedge(entreprise.Objet)) {
				document.getElementById("checkin").disabled = false; 
			}
		} 
		
			
		
			
		google.maps.event.addListener(Entreprise[0].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[0],event.latLng);	
			google.maps.event.addDomListener(document.getElementById('info'), 'click', function(){window.location.href= Entreprise[0].Chemin})
			google.maps.event.addDomListener(document.getElementById('checkin'), 'click', function(){alert("Check-in réalisé́!")})	
  		})
		
		google.maps.event.addListener(Entreprise[1].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[1],event.latLng);
			google.maps.event.addDomListener(document.getElementById('info'), 'click', function(){window.location.href= Entreprise[1].Chemin})
			google.maps.event.addDomListener(document.getElementById('checkin'), 'click', function(){alert("Check-in réalisé!")})	
  		})
	};

  	navigator.geolocation.getCurrentPosition(onSuccess, onError);
  
  	//géolocalisation : off
    function onError(error) {
		//alert(' activer geolocalisation');
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
