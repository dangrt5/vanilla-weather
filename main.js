window.onload = () => {
  init();
};

function init() {
  applyHandlers();
}

function applyHandlers() {
  document.querySelector(".btn").addEventListener("click", submitButtonHandler);
}

function submitButtonHandler(e) {
  e.preventDefault();
  const zipcode = document.querySelector("input").value;
  if (!zipcode) return;
  getWeatherData(zipcode);
}

function getWeatherData(zipcode) {
  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${
      keys.weather_api
    }`,
    { method: "get" }
  )
    .then(res => res.json())
    .then(data => {
      const { name } = data;
      const weatherDiv = document.querySelector(".weather-content");
      const city = document.createElement("h1");

      weatherDiv.innerHTML = "";
      city.classList.add("text-center");
      city.textContent = name;

      weatherDiv.appendChild(city);
    })
    .catch(err => console.log(err));
}
