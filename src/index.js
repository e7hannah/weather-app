//Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();

let dayTime = document.querySelector(".day-time");

let hours = now.getHours();
hours = ("0" + hours).slice(-2);

let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

dayTime.innerHTML = `${day} ${hours}:${minutes}`;

//Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".current-temp");
  temperatureElement.innerHTML = `${temperature}`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".form-control");
  let locationHeader = document.querySelector(".location");
  locationHeader.innerHTML = `${searchInput.value}`;

  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let newLocation = searchInput.value;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&units=${units}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

//Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
//function convertCurrentTempCelcius(event) {
//event.preventDefault();
//let celcius = document.querySelector(".current-temp");
//celcius.innerHTML = "17";
//}

//function convertCurrentTempFarenheit(event) {
// event.preventDefault();
//let farenheit = document.querySelector(".current-temp");
// farenheit.innerHTML = "62";
//}

//let convertTempCelcius = document.querySelector("#convert-temp-c");
//convertTempCelcius.addEventListener("click", convertCurrentTempCelcius);

//let convertTempFarenheit = document.querySelector("#convert-temp-f");
//convertTempFarenheit.addEventListener("click", convertCurrentTempFarenheit);

function showPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);

  let locationHeader = document.querySelector(".location");
  locationHeader.innerHTML = `${lat}, ${lon}`;
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current");
currentButton.addEventListener("submit", getCurrentPosition);
