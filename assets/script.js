// var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e015a0a7f21ac1de523ad774a61e8902";



var citySearched = document.getElementById("city_searched");
var searchButton = document.getElementById("search");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var date1 = document.getElementById("date1");
var temp1 = document.getElementById("temp1");
var wind1 = document.getElementById("wind1");
var humidity1 = document.getElementById("humidity1");
var date2 = document.getElementById("date2");
var temp2 = document.getElementById("temp2");
var wind2 = document.getElementById("wind2");
var humidity2 = document.getElementById("humidity2");
var date3 = document.getElementById("date3");
var temp3 = document.getElementById("temp3");
var wind3 = document.getElementById("wind3");
var humidity3 = document.getElementById("humidity3");
var date4 = document.getElementById("date4");
var temp4 = document.getElementById("temp4");
var wind4 = document.getElementById("wind4");
var humidity4 = document.getElementById("humidity4");
var date5 = document.getElementById("date5");
var temp5 = document.getElementById("temp5");
var wind5 = document.getElementById("wind5");
var humidity5 = document.getElementById("humidity5");

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

            var currentDate = data.list[0].dt_txt;

            console.log(currentDate);

            city.textContent = userInput + " (" + currentDate + ")" + data.list[0].weather[0].icon;
            temp.textContent = "Temp: " + data.list[0].main.temp;
            wind.textContent = "Wind: " + data.list[0].wind.deg;
            humidity.textContent = "Humdity: " + data.list[0].main.humidity;

            date1.textContent = data.list[1].dt_txt;
            temp1.textContent = "Temp: " + data.list[1].main.temp;
            wind1.textContent = "Wind: " + data.list[1].wind.deg;
            humidity1.textContent = "Humdity: " + data.list[1].main.humidity;

            date2.textContent = data.list[2].dt_txt;
            temp2.textContent = "Temp: " + data.list[2].main.temp;
            wind2.textContent = "Wind: " + data.list[2].wind.deg;
            humidity2.textContent = "Humdity: " + data.list[2].main.humidity;

            date3.textContent = data.list[3].dt_txt;
            temp3.textContent = "Temp: " + data.list[3].main.temp;
            wind3.textContent = "Wind: " + data.list[3].wind.deg;
            humidity3.textContent = "Humdity: " + data.list[3].main.humidity;

            date4.textContent = data.list[4].dt_txt;
            temp4.textContent = "Temp: " + data.list[4].main.temp;
            wind4.textContent = "Wind: " + data.list[4].wind.deg;
            humidity4.textContent = "Humdity: " + data.list[4].main.humidity;

            date5.textContent = data.list[5].dt_txt;
            temp5.textContent = "Temp: " + data.list[5].main.temp;
            wind5.textContent = "Wind: " + data.list[5].wind.deg;
            humidity5.textContent = "Humdity: " + data.list[5].main.humidity;



        })


}