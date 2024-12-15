const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const apiKey = 'f76f1baf2ea14af9a0e5cdc329b02418';
// let city = New York; 

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"° C";
    document.querySelector('.text1 h2').innerHTML = Math.round(data.main.humidity)+"%";
    document.querySelector('.spd').innerHTML = Math.round(data.wind.speed)+" km/hr";
    document.querySelector('.weather').style.display = "block"; 

    if(data.weather[0].main==='Mist'){
        icon.src = "images/mist.png";
    };
    if(data.weather[0].main==='Clear'){
        icon.src = "images/clear.png";
    };
    if(data.weather[0].main==='Drizzle'){
        icon.src = "images/drizzle.png";
    };
    if(data.weather[0].main==='Humidity'){
        icon.src = "images/humidity.png";
    };
    if(data.weather[0].main==='Rain'){
        icon.src = "images/rain.png";
    };
    if(data.weather[0].main==='Snow'){
        icon.src = "images/snow.png";
    };
    if(data.weather[0].main==='Wind'){
        icon.src = "images/wind.png";
    };
    if(data.weather[0].main==='Clouds'){
        icon.src = "images/clouds.png";
    };
    
    document.querySelector('.error').style.display = "none";
    document.querySelector('.weather').style.display = "block";

    }
    
}

// checkWeather();

let searchButton = document.querySelector('.search button');
let searchInput = document.querySelector('.search input');
let icon = document.querySelector('.weather-icon');

searchButton.addEventListener('click',()=>{
    city = searchInput.value;
    checkWeather(searchInput.value);
})