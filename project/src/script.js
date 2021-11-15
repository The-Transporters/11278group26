import $ from 'jquery';

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=55eedb3610cdff0867bc0990602170eb", function(data){
  console.log(data);
}
);