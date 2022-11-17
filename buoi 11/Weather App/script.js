const key = "238ef8cea944af2fb6c8bae1b54f4500";

let searchBox = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let highlow = document.querySelector(".high-low");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

//event
searchBox.addEventListener("keydown", searchCity);

function searchCity(event) {
  if (event.key === "Enter") {
    console.log(event.target.value);
    getResponse(event.target.value);
  }
}

// call API
function getResponse(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
  )
    .then(function (response) {
      //   console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      showResult(data);
    });
}

// show result
function showResult(data) {
  let today = new Date ();  

  city.innerText = `${data.name}, ${data.sys.country}`;
  date.innerText = today.toLocaleDateString('en-US',options);
  weather.innerText = `${data.weather[0].main}`;
//   temperature.innerText = `${data.main.temp} ºC`;
//   highlow.innerText = `${data.main.temp_max} ºC / ${data.main.temp_min} ºC`;

// làm tròn nhiệt độ
temperature.innerText = `${Math.round(data.main.temp)} ºC`;
highlow.innerText = `${Math.round(data.main.temp_max)} ºC / ${Math.round(data.main.temp_min)} ºC`;
}

