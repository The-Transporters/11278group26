import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

var place = "gainesville";

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +place+ "&units=imperial&appid=55eedb3610cdff0867bc0990602170eb", function(data){
  console.log(data);

  var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon +".png";
  var temp =data.main.temp + "°F";
  var weather = data.weather[0].main;

  $(".icon").attr("src", icon);
  $(".temp").append(temp);
  $(".weather").append(weather);
}
<<<<<<< HEAD
);
$.getJSON("http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=Miami,FL&Waypoint.2=Gainesville,FL&maxSolutions=4&distanceUnit=km&key=AixbZsh0iF2Uvsmk5iXVAdlztlQTsIU0lJntJCtS2mYY8OexSyDS3Vm8WOoKY9vm", function(data){
  console.log(data);
}
);
=======
);*/
//$.getJSON("http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=Miami,FL&Waypoint.2=Gainesville,FL&maxSolutions=4&distanceUnit=km&key=AixbZsh0iF2Uvsmk5iXVAdlztlQTsIU0lJntJCtS2mYY8OexSyDS3Vm8WOoKY9vm", function(data){
//  console.log(data);
//}
//);
>>>>>>> 164663a2694d76ec97128234e9e7eee98dedaf3a
