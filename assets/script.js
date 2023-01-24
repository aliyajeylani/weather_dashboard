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

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=e015a0a7f21ac1de523ad774a61e8902`;

    console.log(userInput);

    fetch(requestUrl)
        .then(function (response) {

            return response.json();
        })

        .then(function (data) {
            console.log(data)

            var currentDate = data.list[0].dt_txt;

            // console.log(currentDate);


            var iconUrl = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

            var image = document.createElement("img");
            image.src = iconUrl;


            city.textContent = userInput + " (" + currentDate + ") ";
            city.appendChild(image);

            tempKelvin = data.list[0].main.temp;

            function temperatureConverter(valNum) {
                valNum = parseFloat(valNum);
                // console.log(((valNum - 273.15) * 1.8) + 32);
                return ((valNum - 273.15) * 1.8) + 32;

            }


            temp.textContent = "Temp: " + temperatureConverter(tempKelvin).toFixed() + '°F';

            wind.textContent = "Wind: " + data.list[0].wind.deg;
            humidity.textContent = "Humdity: " + data.list[0].main.humidity + ' %';



            var image1 = document.createElement("img");
            image1.src = `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;

            date1.textContent = data.list[1].dt_txt;
            icon1.appendChild(image1);
            temp1Kelvin = data.list[1].main.temp;
            temp1.textContent = "Temp: " + temperatureConverter(temp1Kelvin).toFixed() + '°F';
            wind1.textContent = "Wind: " + data.list[1].wind.deg;
            humidity1.textContent = "Humdity: " + data.list[1].main.humidity + ' %';


            var image2 = document.createElement("img");
            image2.src = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;

            date2.textContent = data.list[2].dt_txt;
            icon2.appendChild(image2);
            temp2Kelvin = data.list[2].main.temp;
            temp2.textContent = "Temp: " + temperatureConverter(temp2Kelvin).toFixed() + '°F';
            wind2.textContent = "Wind: " + data.list[2].wind.deg;
            humidity2.textContent = "Humdity: " + data.list[2].main.humidity + ' %';


            var image3 = document.createElement("img");
            image3.src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;

            date3.textContent = data.list[3].dt_txt;
            icon3.appendChild(image3);
            temp3Kelvin = data.list[3].main.temp;
            temp3.textContent = "Temp: " + temperatureConverter(temp3Kelvin).toFixed() + '°F';
            wind3.textContent = "Wind: " + data.list[3].wind.deg;
            humidity3.textContent = "Humdity: " + data.list[3].main.humidity + ' %';


            var image4 = document.createElement("img");
            image4.src = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;

            date4.textContent = data.list[4].dt_txt;
            icon4.appendChild(image4);
            temp4Kelvin = data.list[4].main.temp;
            temp4.textContent = "Temp: " + temperatureConverter(temp4Kelvin).toFixed() + '°F';
            wind4.textContent = "Wind: " + data.list[4].wind.deg;
            humidity4.textContent = "Humdity: " + data.list[4].main.humidity + ' %';


            var image5 = document.createElement("img");
            image5.src = `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;

            date5.textContent = data.list[5].dt_txt;
            icon5.appendChild(image5);
            temp5Kelvin = data.list[5].main.temp;
            temp5.textContent = "Temp: " + temperatureConverter(temp5Kelvin).toFixed() + '°F';
            wind5.textContent = "Wind: " + data.list[5].wind.deg;
            humidity5.textContent = "Humdity: " + data.list[5].main.humidity + ' %';



        })


}