const apiKey = "1fb0b71b958a4862c7e9defac1cb3c91";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  // Updating the Images according to the weather
  weatherMain = data.weather[0].main;
  image = document.querySelector(".weather-icon");
  wName = document.querySelector(".weather-name");
  wName.innerHTML = weatherMain;
  if (weatherMain == "Clear") {
    image.src = `./icons/clear.png`;
    // myWeatherContainer.style.backgroundColor = '#ec6e4c'
  }
  if (weatherMain == "Clouds") {
    image.src = `./icons/clouds.png`;
    // myWeatherContainer.style.backgroundColor = '#86d3d3'
  }
  if (weatherMain == "Rain") {
    image.src = `./icons/rain.png`;
    // myWeatherContainer.style.backgroundColor = '#494bcf'
  }
  if (weatherMain == "Drizzle") {
    image.src = `./icons/drizzle.png`;
    // myWeatherContainer.style.backgroundColor = '#8ecfcf'
  }
  if (weatherMain == "Haze") {
    image.src = `./icons/drizzle.png`;
    // myWeatherContainer.style.backgroundColor = '#d8ced2'
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
