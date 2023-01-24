// var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e015a0a7f21ac1de523ad774a61e8902";

var citySearched = document.getElementById("city_searched");
var searchButton = document.getElementById("search");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var date1 = document.getElementById("date1");
var icon1 = document.getElementById('icon1');
var temp1 = document.getElementById("temp1");
var wind1 = document.getElementById("wind1");
var humidity1 = document.getElementById("humidity1");
var date2 = document.getElementById("date2");
var icon2 = document.getElementById('icon2');
var temp2 = document.getElementById("temp2");
var wind2 = document.getElementById("wind2");
var humidity2 = document.getElementById("humidity2");
var date3 = document.getElementById("date3");
var icon3 = document.getElementById('icon3');
var temp3 = document.getElementById("temp3");
var wind3 = document.getElementById("wind3");
var humidity3 = document.getElementById("humidity3");
var date4 = document.getElementById("date4");
var icon4 = document.getElementById('icon4');
var temp4 = document.getElementById("temp4");
var wind4 = document.getElementById("wind4");
var humidity4 = document.getElementById("humidity4");
var date5 = document.getElementById("date5");
var icon5 = document.getElementById('icon5');
var temp5 = document.getElementById("temp5");
var wind5 = document.getElementById("wind5");
var humidity5 = document.getElementById("humidity5");

searchButton.addEventListener("click", getForecast);

function getForecast() {

    var userInput = citySearched.value;

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=e015a0a7f21ac1de523ad774a61e8902&units=imperial`;

    console.log(userInput);

    fetch(requestUrl)
        .then(function (response) {

            return response.json();
        })

        .then(function (data) {
            console.log(data)

            var dateGMT = data.list[0].dt_txt;

            var date = new Date(dateGMT);

            var centralTime = date.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });


            var iconUrl = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

            var image = document.createElement("img");
            image.src = iconUrl;

            city.textContent = userInput + " (" + centralTime + ") ";
            city.appendChild(image);
            temp.textContent = "Temp: " + data.list[0].main.temp.toFixed() + '°F';
            wind.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
            humidity.textContent = "Humdity: " + data.list[0].main.humidity + ' %';


            var image1 = document.createElement("img");
            image1.src = `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;


            var date1GMT = new Date(data.list[1].dt_txt);

            var centralTime1 = date1GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date1.textContent = centralTime1;
            icon1.appendChild(image1);
            temp1.textContent = "Temp: " + data.list[1].main.temp.toFixed() + '°F';
            wind1.textContent = "Wind: " + data.list[1].wind.speed + " MPH";
            humidity1.textContent = "Humdity: " + data.list[1].main.humidity + ' %';


            var image2 = document.createElement("img");
            image2.src = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;



            var date2GMT = new Date(data.list[2].dt_txt);

            var centralTime2 = date2GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date2.textContent = centralTime2;
            icon2.appendChild(image2);
            temp2.textContent = "Temp: " + data.list[2].main.temp.toFixed() + '°F';
            wind2.textContent = "Wind: " + data.list[2].wind.speed + " MPH";
            humidity2.textContent = "Humdity: " + data.list[2].main.humidity + ' %';


            var image3 = document.createElement("img");
            image3.src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;


            var date3GMT = new Date(data.list[3].dt_txt);

            var centralTime3 = date3GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date3.textContent = centralTime3;
            icon3.appendChild(image3);
            temp3.textContent = "Temp: " + data.list[3].main.temp.toFixed() + '°F';
            wind3.textContent = "Wind: " + data.list[3].wind.speed + " MPH";
            humidity3.textContent = "Humdity: " + data.list[3].main.humidity + ' %';


            var image4 = document.createElement("img");
            image4.src = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;


            var date4GMT = new Date(data.list[4].dt_txt);

            var centralTime4 = date4GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date4.textContent = centralTime4;
            icon4.appendChild(image4);
            temp4.textContent = "Temp: " + data.list[4].main.temp.toFixed() + '°F';
            wind4.textContent = "Wind: " + data.list[4].wind.speed + " MPH";
            humidity4.textContent = "Humdity: " + data.list[4].main.humidity + ' %';


            var image5 = document.createElement("img");
            image5.src = `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;


            var date5GMT = new Date(data.list[5].dt_txt);

            var centralTime5 = date5GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date5.textContent = centralTime5;
            icon5.appendChild(image5);
            temp5.textContent = "Temp: " + data.list[5].main.temp.toFixed() + '°F';
            wind5.textContent = "Wind: " + data.list[5].wind.speed + " MPH";
            humidity5.textContent = "Humdity: " + data.list[5].main.humidity + ' %';



        })


}