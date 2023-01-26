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
var button = document.querySelector('.buttons');
var array = [];
// var userInput = "";

searchButton.addEventListener("click", handleSearch);

button.addEventListener("click", handleButton);

function displayHistory() {
    button.innerHTML = "";

    for (var i = array.length - 1; i >= 0; i--) {

        var btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "history_btn");
        btn.setAttribute("data-search", array[i]);
        btn.textContent = array[i];
        button.append(btn);
    }
}

function addHistory(search) {

    if (array.indexOf(search) !== -1) {
        return;
    }
    array.push(search);
    localStorage.setItem("Cities", JSON.stringify(array));
    displayHistory();
}


function getHistory() {

    var storedHistory = localStorage.getItem("Cities");

    if (storedHistory) {
        array = JSON.parse(storedHistory)
    }
    displayHistory();
}

getHistory();

function handleButton(e) {

    if (!e.target.matches(".history_btn")) {
        return;
    }
    var btn = e.target
    var search = btn.getAttribute("data-search")
    getForecast(search);
}

function handleSearch(e) {

    if (!citySearched.value) {
        return;
    }
    e.preventDefault();
    var search = citySearched.value.trim();
    getForecast(search);
}

function getForecast(search) {

    addHistory(search);

    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=e015a0a7f21ac1de523ad774a61e8902&units=imperial`;

    // console.log(userInput);

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

            city.textContent = search + " (" + centralTime + ") ";
            city.appendChild(image);
            temp.textContent = "Temp: " + data.list[0].main.temp.toFixed() + '°F';
            wind.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
            humidity.textContent = "Humdity: " + data.list[0].main.humidity + ' %';

            icon1.innerHTML = "";
            var image1 = document.createElement("img");
            image1.src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;


            var date1GMT = new Date(data.list[8].dt_txt);

            var centralTime1 = date1GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date1.textContent = centralTime1;
            icon1.appendChild(image1);
            temp1.textContent = "Temp: " + data.list[8].main.temp.toFixed() + '°F';
            wind1.textContent = "Wind: " + data.list[8].wind.speed + " MPH";
            humidity1.textContent = "Humdity: " + data.list[8].main.humidity + ' %';


            var image2 = document.createElement("img");
            image2.src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;



            var date2GMT = new Date(data.list[16].dt_txt);

            var centralTime2 = date2GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date2.textContent = centralTime2;
            icon2.appendChild(image2);
            temp2.textContent = "Temp: " + data.list[16].main.temp.toFixed() + '°F';
            wind2.textContent = "Wind: " + data.list[16].wind.speed + " MPH";
            humidity2.textContent = "Humdity: " + data.list[16].main.humidity + ' %';


            var image3 = document.createElement("img");
            image3.src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;


            var date3GMT = new Date(data.list[24].dt_txt);

            var centralTime3 = date3GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date3.textContent = centralTime3;
            icon3.appendChild(image3);
            temp3.textContent = "Temp: " + data.list[24].main.temp.toFixed() + '°F';
            wind3.textContent = "Wind: " + data.list[24].wind.speed + " MPH";
            humidity3.textContent = "Humdity: " + data.list[24].main.humidity + ' %';


            var image4 = document.createElement("img");
            image4.src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;


            var date4GMT = new Date(data.list[32].dt_txt);

            var centralTime4 = date4GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date4.textContent = centralTime4;
            icon4.appendChild(image4);
            temp4.textContent = "Temp: " + data.list[32].main.temp.toFixed() + '°F';
            wind4.textContent = "Wind: " + data.list[32].wind.speed + " MPH";
            humidity4.textContent = "Humdity: " + data.list[32].main.humidity + ' %';


            var image5 = document.createElement("img");
            image5.src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;


            var date5GMT = new Date(data.list[39].dt_txt);

            var centralTime5 = date5GMT.toLocaleString('en-us', {
                timeZone: 'CST',
                dateStyle: 'short',
            });

            date5.textContent = centralTime5;
            icon5.appendChild(image5);
            temp5.textContent = "Temp: " + data.list[39].main.temp.toFixed() + '°F';
            wind5.textContent = "Wind: " + data.list[39].wind.speed + " MPH";
            humidity5.textContent = "Humdity: " + data.list[39].main.humidity + ' %';


        })


}