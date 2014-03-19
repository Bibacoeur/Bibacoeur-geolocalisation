// JavaScript Document

//On attend le chargement de la page avant de lancer la fonction d'initialisation
$(document).delegate("#map", 'pageinit', function (event) {
    initialize();
});
	
function initialize() {
	
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
	
	//Les options de la carte
	var mapOptions = {
    	zoom: 14,
    	center: new google.maps.LatLng(45.7840383, 4.8776921),
		styles : myStyles,
		streetViewControl: false
  		};
	
	 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	 
	//On charge la carte une fois à l'ouverture de la page 
	loadmap();
	
	
	//On simule la position du joueur à un point hors du campus pour qu'il puisse consulter la carte sans pouvoir réaliser de check-in
	var position_joueur = new google.maps.LatLng(0,0);

	//On actualise la position du joueur sans recharger toute la carte
	navigator.geolocation.watchPosition(onSuccess, onError),{maximumAge:600000, timeout:10000, enableHighAccuracy: true};
  
  	//géolocalisation : off
    function onError(error) {
		alert(' activer geolocalisation');		
 	} 
  

  	//géolocalisation : on
  	function onSuccess(position) { 
 		position_joueur = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		setcircle();
	}

	//Distance à laquelle le joueur peut se localiser (rayon du cercle)
	var precision_metre = 30;
	
	var displaycurrentposition = new google.maps.Circle();
	
	//Lorsque l'on récupère la position du joueur on affiche le cercle
	function setcircle() {
		var position_options = {
	  		strokeColor: '#FF0000',
      		strokeOpacity: 0.8,
      		strokeWeight: 2,
      		fillColor: '#FF0000',
      		fillOpacity: 0.35,
      		map: map,
      		center: position_joueur,
      		radius: precision_metre,
   	 	};
		//On efface l'ancien cercle pour ne pas surcharger la carte
		displaycurrentposition.setMap(null);
		displaycurrentposition = new google.maps.Circle(position_options);
		//Pn centre la carte sur le joueur
		map.panTo(position_joueur);
        map.setZoom(17);
	}
		
	//fonction appelé au chargement de la carte
	function loadmap() {
	
	
		// On définit les coordonnées de chaque zone
  		var GICoords = [
    		new google.maps.LatLng(45.78279609583433, 4.872613258335832),
			new google.maps.LatLng(45.78311783435683, 4.873997223942524),
			new google.maps.LatLng(45.78298309235994, 4.87404547752385),
			new google.maps.LatLng(45.78309725873358, 4.874528310388882),
			new google.maps.LatLng(45.78190573133237, 4.8750915652206),
			new google.maps.LatLng(45.78163633893279, 4.873903333536418),
			new google.maps.LatLng(45.782549131528334, 4.873530493392991),
			new google.maps.LatLng(45.78241448091351, 4.872795608335878)
  		];
  
  		var BMCCoords = [
     		new google.maps.LatLng(45.78274366611187, 4.8757513624575495),
			new google.maps.LatLng(45.78299812165077, 4.876979840367085),
			new google.maps.LatLng(45.78242574172158, 4.877205145924336),
			new google.maps.LatLng(45.78216757006048, 4.8760625389161305)
  		];
		
		var GENCoords = [
    		new google.maps.LatLng(45.783147752451555, 4.872468419049028),
			new google.maps.LatLng(45.783454524884284, 4.873868514155561),
			new google.maps.LatLng(45.78311783435683, 4.873997223942524),
			new google.maps.LatLng(45.78279609583433, 4.872613258335832)
  		];
		
		var TCCoords = [
    		new google.maps.LatLng(45.783880986774086, 4.872114367459062),
			new google.maps.LatLng(45.78416529952895, 4.873519844982866),
			new google.maps.LatLng(45.783454524884284, 4.873868514155561),
			new google.maps.LatLng(45.783147752451555, 4.872468419049028)
  		];
		
		var GECoords = [
    		new google.maps.LatLng(45.783574226649186, 4.870773262951616),
			new google.maps.LatLng(45.783880986774086, 4.872114367459062),
			new google.maps.LatLng(45.78291207043258, 4.872560950760203),
			new google.maps.LatLng(45.782624012725876, 4.871210454021366)
  		];
		
		var RotondeCoords = [
    		new google.maps.LatLng(45.78416529952895, 4.873519844982866),
			new google.maps.LatLng(45.784329910948536, 4.874276209925824),
			new google.maps.LatLng(45.78371639403171, 4.874544394581562),
			new google.maps.LatLng(45.783566744673855, 4.873820252392534)
  		];
		
		var EFICoords = [
    		new google.maps.LatLng(45.78483118425365, 4.870150990460161),
			new google.maps.LatLng(45.785324981272936, 4.872586436245683),
			new google.maps.LatLng(45.78408294347568, 4.873133526458787),
			new google.maps.LatLng(45.783574226649186, 4.870773262951616)
  		];
		
		var CBCoords = [
    		new google.maps.LatLng(45.785324981272936, 4.872586436245683),
			new google.maps.LatLng(45.78596841715052, 4.8753705512039005),
			new google.maps.LatLng(45.7846890397969, 4.875928414433247),
			new google.maps.LatLng(45.78408294347568, 4.873133526458787)
  		];
		
		var HumasCoords = [
    		new google.maps.LatLng(45.783566744673855, 4.873820252392534),
			new google.maps.LatLng(45.78409797238965, 4.876185942744428),
			new google.maps.LatLng(45.78349941689201, 4.876432669728047),
			new google.maps.LatLng(45.78298309235994, 4.87404547752385)
  		];
		
		var KfetCoords = [
    		new google.maps.LatLng(45.784329910948536, 4.874276209925824),
			new google.maps.LatLng(45.7846890397969, 4.875928414433247),
			new google.maps.LatLng(45.78409797238965, 4.876185942744428),
			new google.maps.LatLng(45.78371639403171, 4.874544394581562)
  		];
		
		var BSCoords = [
    		new google.maps.LatLng(45.78241448091351, 4.872795608335878),
			new google.maps.LatLng(45.782549131528334, 4.873530493392991),
			new google.maps.LatLng(45.78163633893279, 4.873903333536418),
			new google.maps.LatLng(45.781486661440596, 4.873197899475144)
  		];
		
		var IFCoords = [
    		new google.maps.LatLng(45.78254539047193, 4.872414694442796),
			new google.maps.LatLng(45.78260717301228, 4.8727044534423385),
			new google.maps.LatLng(45.781486661440596, 4.873197899475144),
			new google.maps.LatLng(45.78119485273164, 4.871829972877549),
			new google.maps.LatLng(45.781823427004845, 4.871561814402753),
			new google.maps.LatLng(45.78204789292776, 4.872634661762959)
  		];
		
		var BeurkCoords = [
    		new google.maps.LatLng(45.781398800019176, 4.872784919712785),
			new google.maps.LatLng(45.78162888921024, 4.873889971827566),
			new google.maps.LatLng(45.78067115486669, 4.874260080425984),
			new google.maps.LatLng(45.780454100687905, 4.873213992729234)
  		];
		
		var CDCoords = [
    		new google.maps.LatLng(45.78021471872471, 4.871931977246049),
			new google.maps.LatLng(45.78067115486669, 4.874260080425984),
			new google.maps.LatLng(45.77957871895478, 4.874716055958515),
			new google.maps.LatLng(45.7791745967048, 4.8724039656069635)
  		];
		
		var GCUCoords = [
    		new google.maps.LatLng(45.7846890397969, 4.875928414433247),
			new google.maps.LatLng(45.78492845760968, 4.876936961268484),
			new google.maps.LatLng(45.783746321846614, 4.877441180317646),
			new google.maps.LatLng(45.78349941689201, 4.876432669728047)
  		];
		
		var GMCCoords = [
    		new google.maps.LatLng(45.78309725873358, 4.874528310388882),
			new google.maps.LatLng(45.783574236610406, 4.876711655711233),
			new google.maps.LatLng(45.78299812165077, 4.876979840367085),
			new google.maps.LatLng(45.78274366611187, 4.8757513624575495),
			new google.maps.LatLng(45.78216757006048, 4.8760625389161305),
			new google.maps.LatLng(45.78190573133237, 4.8750915652206)
  		];
		
		var DirCoords = [
    		new google.maps.LatLng(45.783574236610406, 4.876711655711233),
			new google.maps.LatLng(45.78404559903309, 4.878857422923261),
			new google.maps.LatLng(45.78290456332772, 4.8793535822549075),
			new google.maps.LatLng(45.78242574172158, 4.877205145924336),
  		];
		
		var CapelleCoords = [
    		new google.maps.LatLng(45.78368645615884, 4.879002280209306),
			new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.783357258997576, 4.881378663151509),
			new google.maps.LatLng(45.78290456332772, 4.8793535822549075)
  		];
		
		var CDSCoords = [
    		new google.maps.LatLng(45.78596841715052, 4.8753705512039005),
			new google.maps.LatLng(45.78649961201979, 4.877752352809011),
			new google.maps.LatLng(45.78404559903309, 4.878857422923261),
			new google.maps.LatLng(45.783746321846614, 4.877441180317646),
			new google.maps.LatLng(45.78492845760968, 4.876936961268484),
			new google.maps.LatLng(45.7846890397969, 4.875928414433247)
  		];
		
		var GJCoords = [
    		new google.maps.LatLng(45.78649961201979, 4.877752352809011),
			new google.maps.LatLng(45.78675772102882, 4.879117606197269),
			new google.maps.LatLng(45.78460670204622, 4.880155589872857),
			new google.maps.LatLng(45.784711433870484, 4.8807805244670135),
			new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.78368645615884, 4.879002280209306)
  		];
		
		var GMDCoords = [
    		new google.maps.LatLng(45.785402604269905, 4.879750616524461),
			new google.maps.LatLng(45.78578137549828, 4.8815718184462185),
			new google.maps.LatLng(45.78441214639291, 4.882113562240875),
			new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.784711433870484, 4.8807805244670135),
			new google.maps.LatLng(45.78460670204622, 4.880155589872857)
  		];
		
		var TravCoords = [
    		new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.78441214639291, 4.882113562240875),
			new google.maps.LatLng(45.78421020088481, 4.882194072814855),
			new google.maps.LatLng(45.78441408202078, 4.883159658998807),
			new google.maps.LatLng(45.7837799906191, 4.883460057347065),
			new google.maps.LatLng(45.783357258997576, 4.881378663151509)
  		];
		
		var FermatCoords = [
    		new google.maps.LatLng(45.78531189818733, 4.881762255286276),
			new google.maps.LatLng(45.785541961267846, 4.8826929818144436),
			new google.maps.LatLng(45.78441408202078, 4.883159658998807),
			new google.maps.LatLng(45.78421020088481, 4.882194072814855)
  		];
		
		var batABCoords = [
    		new google.maps.LatLng(45.78519779154962, 4.882843203518632),
			new google.maps.LatLng(45.785394197284596, 4.883808780764639),
			new google.maps.LatLng(45.78396885117591, 4.884451117450794),
			new google.maps.LatLng(45.7837799906191, 4.883460057347065)
  		];
		
		
		var gymBCoords = [
    		new google.maps.LatLng(45.785541961267846, 4.8826929818144436),
			new google.maps.LatLng(45.78575512451616, 4.883639739170121),
			new google.maps.LatLng(45.785394197284596, 4.883808780764639),
			new google.maps.LatLng(45.78519779154962, 4.882843203518632)
  		];
		
		var SGMCoords = [
    		new google.maps.LatLng(45.782624012725876, 4.871210454021366),
			new google.maps.LatLng(45.78291207043258, 4.872560950760203),
			new google.maps.LatLng(45.78260717301228, 4.8727044534423385),
			new google.maps.LatLng(45.78254539047193, 4.872414694442796),
			new google.maps.LatLng(45.78204789292776, 4.872634661762959),
			new google.maps.LatLng(45.781823427004845, 4.871561814402753)
  		];


  		// On définit les zones
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
		
		var GEN = new google.maps.Polygon({
    		paths: GENCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var TC = new google.maps.Polygon({
    		paths: TCCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var GE = new google.maps.Polygon({
    		paths: GECoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Rotonde = new google.maps.Polygon({
    		paths: RotondeCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var EFI = new google.maps.Polygon({
    		paths: EFICoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var CB = new google.maps.Polygon({
    		paths: CBCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Humas = new google.maps.Polygon({
    		paths: HumasCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Kfet = new google.maps.Polygon({
    		paths: KfetCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var BS = new google.maps.Polygon({
    		paths: BSCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var IF = new google.maps.Polygon({
    		paths: IFCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Beurk = new google.maps.Polygon({
    		paths: BeurkCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var CD = new google.maps.Polygon({
    		paths: CDCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var GCU = new google.maps.Polygon({
    		paths: GCUCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var GMC = new google.maps.Polygon({
    		paths: GMCCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Dir = new google.maps.Polygon({
    		paths: DirCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Capelle = new google.maps.Polygon({
    		paths: CapelleCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var CDS = new google.maps.Polygon({
    		paths: CDSCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var GJ = new google.maps.Polygon({
    		paths: GJCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var GMD = new google.maps.Polygon({
    		paths: GMDCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Trav = new google.maps.Polygon({
    		paths: TravCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var Fermat = new google.maps.Polygon({
    		paths: FermatCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var batAB = new google.maps.Polygon({
    		paths: batABCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		
		var gymB = new google.maps.Polygon({
    		paths: gymBCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var SGM = new google.maps.Polygon({
    		paths: SGMCoords,
    		strokeColor: '#00F12F',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		
  		//On stocke toutes les entreprises dans un tableau d'objets possédant des informations propres aux zones
		var Entreprise = new Array();
		Entreprise[0] = {Objet :GI,
						 Chemin : "GI.html",
						 srcImage : 'img/BMC2.png',
						 //Coordonnées sud-ouest de l'image
						 swBound : new google.maps.LatLng(0, 0),
						 //Coordonnées nord est de l'image
						 neBound : new google.maps.LatLng(1, 1),
						 //On initialise l'image à null, on l'a crée ligne 789
						 bounds : null,
						 Overlay : null,
						 content :  '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>GI</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
		Entreprise[1] = {Objet :BMC,
						 Chemin : "BMC.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(45.7823848, 4.8766084),
						 neBound : new google.maps.LatLng(45.7827290, 4.8769196),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>BMC</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
		Entreprise[2] = {Objet :GEN,
						 Chemin : "GEN.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>GEN</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
		Entreprise[3] = {Objet :TC,
						 Chemin : "TC.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>TC</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
		Entreprise[4] = {Objet :GE,
						 Chemin : "GE.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>GE</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
		Entreprise[5] = {Objet :Rotonde,
						 Chemin : "Rotonde.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Rotonde</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
		Entreprise[6] = {Objet :EFI,
						 Chemin : "EFI.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Batiments E, F et I</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[7] = {Objet :CB,
						 Chemin : "CB.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(45.7844124, 4.8739048),
						 neBound : new google.maps.LatLng(45.7854299, 4.8749133),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Colette Besson</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[8] = {Objet :Humas,
						 Chemin : "Humas.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Humanités</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[9] = {Objet :Kfet,
						 Chemin : "Kfet.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Kfet</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[10] = {Objet :BS,
						 Chemin : "BS.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>BS/BIM</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[11] = {Objet :IF,
						 Chemin : "IF.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>IF</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[12] = {Objet :Beurk,
						 Chemin : "Beurk.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>castor et Pollux</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[13] = {Objet :CD,
						 Chemin : "CD.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Batiments C et D</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[14] = {Objet :GCU,
						 Chemin : "GCU.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>GCU</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[15] = {Objet :GMC,
						 Chemin : "GMC.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>GMC</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[16] = {Objet :Dir,
						 Chemin : "Dir.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Direction/Service courrier</b><br/></center>	<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[17] = {Objet :Capelle,
						 Chemin : "Capelle.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Capelle</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[18] = {Objet :CDS,
						 Chemin : "CDS.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Centre des sports</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[19] = {Objet :GJ,
						 Chemin : "GJ.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Batiments G,J et DDR</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[20] = {Objet :GMD,
						 Chemin : "GMD.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>GMD</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[21] = {Objet :Trav,
						 Chemin : "Trav.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Travées du 1er cycle</b><br/></center>	<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 }; 
						 
		Entreprise[22] = {Objet :Fermat,
						 Chemin : "Fermat.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Batiment Pierre de Fermat</b><br/></center>	<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 }; 
						 
		Entreprise[23] = {Objet :batAB,
						 Chemin : "batAB.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Batiments A et B</b><br/></center>	<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
						 
		Entreprise[24] = {Objet :gymB,
						 Chemin : "gymB.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>Gymnase B</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		Entreprise[25] = {Objet :SGM,
						 Chemin : "SGM.html",
						 srcImage : 'img/BMC2.png',
						 swBound : new google.maps.LatLng(0, 0),
						 neBound : new google.maps.LatLng(1, 1),
						 bounds : null,
						 Overlay : null,
						 content : '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>SGM</b><br/></center>			<button class="checkin" disabled>Check-in</button><br/><button class="info">Informations</button></div>'
						 };
						 
		
		
		//On affiche chaque entreprise ainsi que son image sur la carte 
		for (var i=0;i<Entreprise.length;i++) {
  			Entreprise[i].Objet.setMap(map);
			Entreprise[i].bounds = new google.maps.LatLngBounds(Entreprise[i].swBound, Entreprise[i].neBound);
			Entreprise[i].Overlay = new google.maps.GroundOverlay(Entreprise[i].srcImage,Entreprise[i].bounds);
			Entreprise[i].Overlay.setMap(map);
		};
		
	
		
		
		
		//Fonction permettant de récupérer les coordonnées sur le cercle pour savoir si ce cerlce intersecte une autre zone
		function findCoordinates(lat, long, radius)
		{
   			 	// Combien de points décrivent le cercle? 
    			var numberOfPoints = 80;
    			var degreesPerPoint = 360 / numberOfPoints;

  			  	// Angle courrant (incrémenté de 0 à 360)
    			var currentAngle = 0;

   			 	// Coordonnées des points sur le cerlce
   			 	var x2;
    			var y2;
    			//On sauvegarde les points dans un tableau
   			 	var points = [];

   			 	for(var i=0; i < numberOfPoints; i++) {
       			 	 
       			 	x2 = Math.cos(currentAngle) * radius/111195;
        			
       			 	y2 = Math.sin(currentAngle) * radius/111195;

        			//On crée le point puis on l'ajoute dans le tableau             
       			 	p =  new google.maps.LatLng(lat+x2, long+y2);
        			points.push(p);

        			// On incrémente l'angle
        			currentAngle += degreesPerPoint;
   				 }
    			// On renvoie le tableau de points
    			return points;
			}
	
		//On vérifie si l'entreprise est accessible par le joueur
		function location_contained_or_edge (entreprise) {
			//On regarde s'il on se trouve dans la zone en question
			if (google.maps.geometry.poly.containsLocation(position_joueur,entreprise)) {
				return true;
			}
			// On regarde si le joueur ne se trouve pas à la BMC (check-in débloqué pour toutes les zones)
			else if (google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet)) {
				return true;
			}
			//On regarde si la zone n'est pas accessible via le cercle
	 		else {
					var points = findCoordinates(position_joueur.currentlat,position_joueur.currentlong,precision_metre); 
					var i = 0;
					var ok = false;
					while (i<points.length && !(ok)) {
						if (google.maps.geometry.poly.containsLocation(points[i],entreprise)) {
							ok = true
						}
						else {
							i = i+1;
						}
					}
					return ok;
			}
		}
		
		//On crée une infowindow permettant le check-in ou la demande d'informations
		var infowindow = new google.maps.InfoWindow();
		
		

		function show_myInfowindow(entreprise,position) {
			infowindow.close(map);
			// Replace our Info Window's position
			infowindow.setContent(entreprise.content);
			infowindow.setPosition(position);
			//infowindow.setPosition(position);
			infowindow.open(map);
			//Si la zone est accessible par le joueur, on autorise le check-in
			if (location_contained_or_edge(entreprise.Objet)) {
				document.getElementsByClassName("checkin")[0].disabled = false; 
			}
		} 
		
		
		// Lors d'un click sur une entreprise, on affiche l'infowindow et on écoute un click possible sur "informations" ou "checkin"
		google.maps.event.addListener(Entreprise[0].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[0],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[0].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé́́!")})	
  		})
		
		google.maps.event.addListener(Entreprise[1].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[1],event.latLng);
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[1].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[2].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[2],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[2].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé́!")})	
  		})
		
		google.maps.event.addListener(Entreprise[3].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[3],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[3].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[4].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[4],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[4].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[5].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[5],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[5].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[6].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[6],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[6].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[7].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[7],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[7].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[8].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[8],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[8].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[9].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[9],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[9].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[10].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[10],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[10].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[11].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[11],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[11].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[12].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[12],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[12].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[13].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[13],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[13].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[14].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[14],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[14].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[15].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[15],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[15].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[16].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[16],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[16].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[17].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[17],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[17].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[18].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[18],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[18].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[19].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[19],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[19].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[20].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[20],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[20].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[21].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[21],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[21].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[22].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[22],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[22].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[23].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[23],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[23].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[24].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[24],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[24].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
		google.maps.event.addListener(Entreprise[25].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[25],event.latLng);	
			google.maps.event.addDomListener(document.getElementsByClassName('info')[0], 'click', function(){window.location.href= Entreprise[25].Chemin})
			google.maps.event.addDomListener(document.getElementsByClassName('checkin')[0], 'click', function(){alert("Check-in réalisé!")})	
  		})
		
	};

  	
	
//fin initialize
}
