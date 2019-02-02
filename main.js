window.onload = () => {
  init();
};

function init() {
  applyHandlers();
}

function applyHandlers() {
  document
    .querySelector(".btn-primary")
    .addEventListener("click", submitButtonHandler);
  document
    .querySelector(".btn-warning")
    .addEventListener("click", clearButtonHandler);
}

function submitButtonHandler(e) {
  e.preventDefault();
  const zipcode = document.querySelector("input").value;
  if (!zipcode) return;
  getWeatherData(zipcode);
}

function clearButtonHandler(e) {
  e.preventDefault();
  document.querySelector("input").value = "";
  document.querySelector(".weather-content > .col-8").innerHTML = "";
}

function getWeatherData(zipcode) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${
    keys.weather_api
    }`,
    {
      method: "get"
    }
  )
    .then(res => res.json())
    .then(data => {
      console.log("data", data);
      const {
        name,
        main: { temp, temp_min, temp_max }
      } = data;
      const weatherDiv = document.querySelector(".weather-content > .col-8");
      weatherDiv.innerHTML = "";


      const city = document.createElement("h1");
      const temperature = document.createElement('h1');

      [name, temp, temp_min, temp_max].forEach(item => {
        const newElement = document.createElement('h1');
        newElement.classList.add('text-center');
        newElement.textContent = item;
        weatherDiv.appendChild(newElement);
      })

      // temperature.classList.add('text-center');
      // city.classList.add("text-center");
      // temperature.textContent = `${convertToFahrenheit(temp)}°F`;
      // city.textContent = name;

      // weatherDiv.appendChild(city);
      // weatherDiv.appendChild(temperature);
    })
    .catch(err => console.log(err));
}

function convertToFahrenheit(temp) {
  temp = Math.floor((parseInt(temp) - 273.15) * (9 / 5) + 32);
  return temp;
}
