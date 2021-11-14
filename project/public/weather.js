// var place = "Gainesville";

// var lat = loc.latitude;
// var long = loc.longitude;

// <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

// //$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat" + lat + "&lon=" + long +"&units=imperial&appid=55eedb3610cdff0867bc0990602170eb", function(data){
// //  console.log(data);

// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&appid=55eedb3610cdff0867bc0990602170eb", function(data){
//   console.log(data);

//   var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon +".png";
//   var temp =data.main.temp + "°F";
//   var weather = data.weather[0].main;

//   $(".icon").attr("src", icon);
//   $(".temp").append(temp);
//   $(".weather").append(weather);
// }
// );