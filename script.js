const apiKey = "5173ce4cb81c7ab8f8d1423a5b42f118";
// const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// const images = document.querySelector(".weather-icon img");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    let description = document.querySelector(".desc")
    description.innerHTML = data.weather[0].main;



    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";


    let weatherInfo = data.weather[0].main;
    switch (weatherInfo) {
      case 'Clear':
        document.querySelector(".weather-icon img").src = "img/sun.png";
        break;

      case 'Rain':
        document.querySelector(".weather-icon img").src = 'img/rainy-day.png';
        break;

      case 'Snow':
        document.querySelector(".weather-icon img").src = "img/snow.png";
        break;

      case 'Clouds':
        document.querySelector(".weather-icon img").src = "img/cloudy.png";
        break;

      case 'Mist':
        document.querySelector(".weather-icon img").src = "img/mist.png";
        break;

      case 'Haze':
        document.querySelector(".weather-icon img").src = "img/haze.png";
        break;

      case 'Smoke':
        document.querySelector(".weather-icon img").src = "img/smoke.png";
        break;

      default:
        images.img.src = 'img/cloudy.png';
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
