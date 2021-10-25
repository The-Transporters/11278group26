import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

/*$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=55eedb3610cdff0867bc0990602170eb", function(data){
  console.log(data);
}
);*/
//$.getJSON("http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=Miami,FL&Waypoint.2=Gainesville,FL&maxSolutions=4&distanceUnit=km&key=AixbZsh0iF2Uvsmk5iXVAdlztlQTsIU0lJntJCtS2mYY8OexSyDS3Vm8WOoKY9vm", function(data){
//  console.log(data);
//}
//);