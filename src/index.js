function newWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  let wind = response.data.wind.speed;
  let weatherConditionElement = document.querySelector("#weather-condition");
  let weatherCondition = response.data.condition.description;
  let iconElement = document.querySelector("#icon");
  let icon = response.data.condition.icon_url;
  let city = document.querySelector("#current-city");
  city.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = Math.round(humidity);
  windElement.innerHTML = Math.round(wind);
  weatherConditionElement.innerHTML = weatherCondition;
  iconElement.innerHTML = `<img src="${icon}" width="80">`;
}
function searchCity(city) {
  let apiKey = "5261f4be982ete699385co0647b7a120";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newWeather);
}
function searchEngine(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", searchEngine);
searchCity("Paris");
function newDate() {
  let now = new Date();

  let nowDate = document.querySelector("#current-date");
  let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[now.getMonth()];
  let days =  [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let hours = now.getHours().toString().padStart(2,'0');
  let minutes = now.getMinutes().toString().padStart(2,'0');
  nowDate.innerHTML =`${day}, ${month} ${date}, ${hours}:${minutes}`;
}
newDate();
function displayForecast() {
let forecastElement = document.querySelector("#forecast");
 let days =  [ "Friday", "Saturday", "Sunday", "Monday", "Tueday", ];
 let forecastHTML = "";
 days.forEach(function (day){
  forecastHTML = forecastHTML + `
    <li>
            ${day}
            <br>
            <img src="images/partly-cloudy.png" alt="" class="weather-icon">
            <br>
            <span class="max-temp">19°C</span>
            <span class="low-temp">13°C</span>
          </li>
          `;
 }) ;
 forecastElement.innerHTML = forecastHTML
    
}
displayForecast();