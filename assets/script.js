// var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e015a0a7f21ac1de523ad774a61e8902";



var citySearched = document.getElementById("city_searched");
var searchButton = document.getElementById("search");



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

            document.getElementById("humidity").textContent = "Humdity: " + data.list[0].main.humidity;

        })


}