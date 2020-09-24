$(document).ready(function () {

    $("#weather-btn").on("click", function (event) {
        event.preventDefault();

        var cityInput = $("#weather-input").val().trim();
        console.log(cityInput);
        currentWeather(cityInput);
        // forecast(cityInput);

    })

    // function forecast(city) {

    //     $.ajax({
    //         method:"GET",
    //         url:"https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=93d9460af4fd3e24269b5d261dd5d2b4"
    //     }).then(function (data) {
    //         console.log(data);
    //         $( "p" ).text(data.coord);
    //     })
    // }

    function currentWeather(city) {

        $.ajax({
            method:"GET",
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=93d9460af4fd3e24269b5d261dd5d2b4"
        }).then(function (data) {
            console.log(data);
            $( ".temperature" ).append(data.cod);
        })
    }












    
})