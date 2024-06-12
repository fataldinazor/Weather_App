"use strict";
// const images = require.context("./assets", false, /\.jpg$/);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./assets", false, /\.(jpg)$/));
function displayData(data) {
  // const container=document.querySelector('.container');
  const weatherImage = document.querySelector(".weatherimage");
  const temperature = document.querySelector(".temperature");
  const humidity = document.querySelector(".humidity_op");
  const wind = document.querySelector(".wind_op");
  const windDirection = document.querySelector(".windDirection_op");
  const uv = document.querySelector(".UV_op");
  const desc = document.querySelector(".desc");
  const city = document.querySelector(".city");
  const feelsLike = document.querySelector(".feelsLike");
  const country = document.querySelector(".country");
  const body = document.querySelector("body");
  const currTemp = data.current.temp_c;
//   const imageArray = images.keys.map(images);
  if (currTemp <= 0) {
    body.style.backgroundImage = `url(${images["snow.jpg"]})`;
  } else if (currTemp > 0 && currTemp <= 20) {
    body.style.backgroundImage = `url(${images["clear.jpg"]})`;
  } else if (currTemp > 20 && currTemp <= 30) {
    body.style.backgroundImage = `url(${images["cloudy.jpg"]})`;
  } else if (currTemp > 30 && currTemp <= 40) {
    body.style.backgroundImage = `url(${images["sunny.jpg"]})`;
  } else if (currTemp > 40 && currTemp <= 50) {
    body.style.backgroundImage = `url(${images["hot.jpg"]})`;
  }

  weatherImage.src = data.current.condition.icon;
  temperature.textContent = `${data.current.temp_c}°C`;
  humidity.textContent = `${data.current.humidity}`;
  wind.textContent = `${data.current.wind_kph}Km/h`;
  windDirection.textContent = `${data.current.wind_dir}`;
  uv.textContent = `${data.current.uv}`;
  desc.textContent = `${data.current.condition.text}`;
  city.textContent = `${data.location.name}`;
  feelsLike.textContent = `Feels Like: 
  ${data.current.feelslike_c}°C`;
  country.textContent = `${data.location.region} | ${data.location.country}`;
  // const loadingDiv=document.querySelector('.loading')
  // loadingDiv.classList.remove('active');
  // container.classList.add('active')
}

export { displayData };
