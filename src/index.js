"use strict";
import "./styles.css";
import webLogoImg from "./assets/logo.png";
import { displayData } from "./uiControls";

const webLogo = document.querySelector(".webLogo");
const searchBtn = document.querySelector(".search");
const inputText = document.querySelector(".inputText");

webLogo.src = webLogoImg;
const getInputValue = () => {
  let inputValue = "";
  if (inputText.value !== "") {
    inputValue = inputText.value;
    console.log(inputValue);
    getWeatherInfo(inputValue);
    // return inputValue;
    return;
  } else {
    alert("Give value in the Searchbox");
  }
};
searchBtn.addEventListener("click", getInputValue);

async function getWeatherInfo(name) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=cc166c1e68ec46a59f684130241106&q=${name}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Could not Establish connection");
    }
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
  }
}

// function displayData(data) {
//   console.log(`current Location: ${data.location.name}`);
//   console.log(`CurrentWeather In C: ${data.current.temp_c}`);
//   console.log(`CurrentWeather in F: ${data.current.temp_f}`);
//   console.log(`Wind Speed in km/h ${data.current.wind_kph}`);
//   console.log(`Weather Description : ${data.current.condition.text}`);
//   image.src=data.current.condition.icon;
// }
getWeatherInfo("Bengaluru");
