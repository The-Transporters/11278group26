
import React,{useState} from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';
import ReactWeather, {useOpenWeather} from 'react-open-weather';

import { usePosition } from 'use-position';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




function App() {
  const [start,startValue] = useState("");
  const [end,endValue] = useState("");

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '55eedb3610cdff0867bc0990602170eb',
    lat: usePosition().latitude,
    lon: usePosition().longitude,
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
    
  });


  const handleChange = e =>{

    startValue(e.target.value);

  };

  const handleChange1 = e =>{

    endValue(e.target.value);

  };

  const routeMode = ["transit","driving", "walking"];

 
  var routeModeSwitch = 1;


  
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
      <TextField  label="Start" variant="outlined" value={start} onChange={handleChange} />
      <TextField  label="Destination" variant="filled" value={end} onChange={handleChange1}  />
      
    </Box>
  
</div>
<div className = "weather-bar">

<ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
      
    />

</div>

 <div className = "map-three">
            <ReactBingmaps
              className = "customClass"
              id = "eleven" 
              center = {[13.0827, 80.2707]}
              bingmapKey = {'AsisxH1g8tkBuuyYGPjvgxfeYPmn9JbN1OTLNEupBk-0L8pmI3bAWT9s5tuJ98Vu'}
              directions = {{
                "renderOptions": {"itineraryContainer": "itineraryContainer" },
                "requestOptions": {"routeMode": routeMode[routeModeSwitch], "maxRoutes": 2},
                "wayPoints": [
                      {
                        address: start
                      },
                      {
                        address: end
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
