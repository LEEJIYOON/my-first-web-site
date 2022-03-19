
const API_KEY="ec0ca90825e0fe0b9d295eca92262147"

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data)=> {
        const weatherState = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const currentWeather=data.weather[0].main;
        weatherState.innerText=currentWeather;
        city.innerText=data.name
    }) // get someting from url


    
}

function onGeoError(){
    alert("Sorry. I don't know where you are")

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
