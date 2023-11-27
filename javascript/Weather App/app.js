const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');


async function getWeather(city) {
    var res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbd0976109333c157056197d131a5b64&units=metric`)
   if(res.status == 404){
    document.querySelector(".error").style.display = "block";
   } else{
    document.querySelector(".error").style.display = "none";
   }
   
    var data = await res.json();
    console.log(data);
    document.querySelector('.celsius').innerHTML = Math.round(data.main.temp)  + "°c"
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humiditytyp').innerHTML = Math.round(data.main.humidity) + "%"
    document.querySelector('.winds').innerHTML = Math.round(data.wind.speed) + "km/h"

if(data.weather[0].main =="Clouds"){
     image.src = "images/cloudy sun.png";
} else if(data.weather[0].main == "Clear"){
    image.src = "images/clear-sun2.png";
}

else if(data.weather[0].main == "Rain"){
    image.src = "images/rain.png"
}
else if(data.weather[0].main == "Haze"){
    image.src = "images/haze1.png"
}
else if(data.weather[0].main == "Thunderstrom"){
    image.src = "images/thunder-strom.png"
}
else if(data.weather[0].main == "snow"){
    image.src = "images/snow.png"
}




}
 
searchBtn.addEventListener('click', () =>{

    getWeather(searchInput.value);
})