var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e015a0a7f21ac1de523ad774a61e8902";


fetch(requestUrl)
    .then(function (response) {

        return response.json();
    })

    .then(function (data) {
        console.log(data);
    })