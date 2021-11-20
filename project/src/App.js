<<<<<<< HEAD

import React,{useState} from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';
import ReactWeather, {useOpenWeather} from 'react-open-weather';
import $ from 'jquery';
import { usePosition } from 'use-position';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

var weatherString;
const weatherTypes = ["Drizzle", "Clouds", "Clear", "Snow", "Rain", "Thunderstorm"];

function App() {

  var latitude = usePosition().latitude;
  var longitude = usePosition().longitude;
  const [end,endValue] = useState("");
  const [dest,endDest] = useState("");
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '55eedb3610cdff0867bc0990602170eb',
    lat: latitude,
    lon: longitude,
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
    
  });



  
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +"&units=imperial&appid=55eedb3610cdff0867bc0990602170eb", function(data){
 console.log(data);
  
    var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon +".png";
    var temp =data.main.temp + "°F";
    var weather = data.weather[0].main;
    weatherString = data.weather[0].main;
    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weather);
  }
  );
console.log(weatherString);

  const handleChange = e =>{

    endValue(e.target.value);

  };

  const handleChange1 = e =>{

    endDest(end);

  };

  const routeMode = ["transit","driving", "walking"];

 
  var routeModeSwitch = 0 //default is bus but it never really is accessed;

  if(weatherString === "Clear" || weatherString === "Clouds"){

    routeModeSwitch = 2 //walking;

  }
  else{

    routeModeSwitch = 1 //riding;
    
  }
  
  return (
    <div className="App">
      <div className = "top-bar">
                  <Box
                    
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    {/* <TextField  label="Destination" variant="filled"  onChange={handleChange}  /> */}

                  <TextField 
                    id="outlined-required"
                    label="Destination"
                    defaultValue=""
                    value={end}
                    onChange={handleChange}
                  />
                  <Button
                    className = "button"
                    onClick={handleChange1}
                  >
                    Search
                  </Button>
          </Box>
        
      </div>
      <div className = "weather-bar">

        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Current Location"
            unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
            
          />

      </div>

      <div className = "map-three">
        <ReactBingmaps
          className = "customClass"
          id = "eleven" 
          center = {[latitude, longitude]}
          bingmapKey = {'AsisxH1g8tkBuuyYGPjvgxfeYPmn9JbN1OTLNEupBk-0L8pmI3bAWT9s5tuJ98Vu'}
          //mapOptions = { {'maxZoom': 20, 'minZoom': 10} }
          directions = {{
            "renderOptions": {"itineraryContainer": "itineraryContainer" },
            "requestOptions": {"routeMode": routeMode[routeModeSwitch], "maxRoutes": 2},
            "wayPoints": [
                  {
                    location: [latitude,longitude]
                  },
                  {
                    address: dest
                  }
                ]
          }}
        > 
        </ReactBingmaps>

      </div>
      <div className="direction-container">
      <div className="input-panel" id='inputPanel'></div>
      <div className="itinerary-container" id='itineraryContainer'></div>
      </div>
    </div>
          
  );
}

export const Demo = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    heading,
    error,
  } = usePosition(watch);

  return (
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      speed: {speed}<br/>
      timestamp: {timestamp}<br/>
      accuracy: {accuracy && `${accuracy} meters`}<br/>
      heading: {heading && `${heading} degrees`}<br/>
      error: {error}
    </code>
  );
};

export default App;
=======
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
>>>>>>> 385ceda92925d3f1d9a68390aae3f72155e2c950
