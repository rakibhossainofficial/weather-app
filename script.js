const getWeather = () => {
    const city = document.getElementById("cityInput").value;
    const apiKey = "10d60e8e62f4dd1a1a120ee1eeccf2e3";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const weatherInfo = document.getElementById('weatherInfo')

        const description = data.weather[0].description;
        const tempreture = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherInfo.innerHTML = `
            <p> Description: ${description} </p> 
            <p>Tempreture:  ${tempreture}&#8451</p>
            <p> Humidity: ${humidity}%</p>
            <p> Windspeed: ${windSpeed}</p>
        `
    })

    .catch(error =>{
        console.error('Opps!, Sorry', error)
        document.getElementById("weatherInfo").textContent = "city not found"
    })

}
