var cityVal = document.querySelector("#city-val");
var cityBtn = document.querySelector("#city-button");
var weatherDisplay = document.getElementById("weatherDisplay");
var weatherCol = document.querySelector("#weather-column");
var impTemp = document.querySelector("#imperial-temperature");

var getWeather = function () {

    var cityQuery = cityVal.value || 
    console.log(cityQuery)

    var apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&APPID=e39a389149c1bb57f835e9b4f5629a5c&units=imperial"

    fetch(apiWeatherUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);

            var weatherQuery = cityVal.value;
            weatherDisplay.textContent = weatherQuery;

            var showTemp = data.main.temp;
            impTemp.textContent = showTemp;

            weatherCol.appendChild(impTemp);


        })
    })
}


cityBtn.addEventListener('click', getWeather)
