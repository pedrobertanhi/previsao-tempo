const key = "395370f695e270bc3350f757b609cd10"


function dateScreen (date) {
    console.log(date)
    document.querySelector(".city").innerHTML = "Tempo em " + date.name
    document.querySelector(".country").innerHTML = date.sys.country
    document.querySelector(".temp").innerHTML =  date.main.temp + "°C"
    document.querySelector(".text-prev").innerHTML = date.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + date.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png`
}

async function searchCity (city) {
    // API KEY - https://openweathermap.org/current#name

    const date = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dateScreen(date)
}

function clickBotton () {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}