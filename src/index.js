function newWeather(response){
    let temperature = document.querySelector
}
function searchEngine(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;

}
let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", searchEngine);