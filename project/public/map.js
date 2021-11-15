

var map;
var geoLocation;
var loc;

function GetMap()
{
    map = new Microsoft.Maps.Map('#myMap');
    

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {

        //test = '4000 SW 23rd St, Gainesville, Florida 32608, United States';
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        /*
        Default code for address

        //Create waypoints to route between.
        //var home = new Microsoft.Maps.Directions.Waypoint({ address: 'home', location: new Microsoft.Maps.Location(29.6175778, -82.3559756) });
        var home = new Microsoft.Maps.Directions.Waypoint({ address: test });
        directionsManager.addWaypoint(home);

        var campus = new Microsoft.Maps.Directions.Waypoint({ address: 'campus', location: new Microsoft.Maps.Location(29.6436, -82.3549) });
        directionsManager.addWaypoint(campus);
        */
        //Specify the element in which the itinerary will be rendered.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Specify the where to display the input panel
        directionsManager.showInputPanel('directionsPanel');

        //test = home.getAddress();

        //Request the user's location
        navigator.geolocation.getCurrentPosition(function (position) {
        loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);
    
        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);

        var locationNow = new Microsoft.Maps.Directions.Waypoint({ address: 'My Location', location: loc});
        directionsManager.addWaypoint(locationNow);
    
        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 15 });
    });
        //Calculate directions.
        //directionsManager.calculateDirections();
    });
}


function GetDirections() 
{
    if(geoLocation)
    {
        var end = new Microsoft.Maps.Directions.Waypoint({ address: document.getElementById('toTbx').value });
        directionsManager.addWaypoint(end);
        geoLocation = 0;
    }
    else
    {
        
        //Clear any previously calculated directions.
        directionsManager.clearAll();
        directionsManager.clearDisplay();

        //Create waypoints to route between.
        var start = new Microsoft.Maps.Directions.Waypoint({ address: document.getElementById('fromTbx').value });
        directionsManager.addWaypoint(start);

        var end = new Microsoft.Maps.Directions.Waypoint({ address: document.getElementById('toTbx').value });
        directionsManager.addWaypoint(end);
    }

    //Calculate directions.
    directionsManager.calculateDirections();
}


function GetCurrentLocation()
{
    //directionsManager.clearAll();
    //directionsManager.clearDisplay();
    geoLocation = 1;

    document.getElementById('fromTbx').value = "My Location";

    //var start1 = new Microsoft.Maps.Directions.Waypoint({ address: document.getElementById('fromTbx').value });
    //directionsManager.addWaypoint(start1);

    //Request the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);
    
        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);

        var locationNow = new Microsoft.Maps.Directions.Waypoint({ address: 'My Location', location: loc});
        directionsManager.addWaypoint(locationNow);
    
        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 15 });
    });
}