// var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e015a0a7f21ac1de523ad774a61e8902";



var citySearched = document.getElementById("city_searched");
var searchButton = document.getElementById("search");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");

searchButton.addEventListener("click", getForecast);





function getForecast() {

    var userInput = citySearched.value;

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=e015a0a7f21ac1de523ad774a61e8902`;

    console.log(userInput);

    fetch(requestUrl)
        .then(function (response) {

            return response.json();
        })

        .then(function (data) {
            console.log(data)

            city.textContent = userInput;
            temp.textContent = "Temp: " + data.list[0].main.temp;
            wind.textContent = "Wind: " + data.list[0].wind.deg;
            humidity.textContent = "Humdity: " + data.list[0].main.humidity;

        })


}