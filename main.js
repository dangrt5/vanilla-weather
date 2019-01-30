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

  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${
      keys.weather_api
    }`,
    { method: "get" }
  )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
