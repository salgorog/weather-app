var cityVal = document.querySelector("#city-val");
var cityBtn = document.querySelector("#city-button");

var getWeather = function () {

    var cityQuery = cityVal.value;
    console.log(cityQuery)

    var apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&APPID=e39a389149c1bb57f835e9b4f5629a5c&units=imperial"

    fetch(apiWeatherUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        })
    })
}

cityBtn.addEventListener('click', getWeather)
