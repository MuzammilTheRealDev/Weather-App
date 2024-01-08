// let cityName = document.querySelector('#cityname')

// let key = 'e6a46978e455e6ca908becf15de184e7';
// // let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
// // let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
// let api = `https://api.openweathermap.org/data/2.5/weather?appid=e6a46978e455e6ca908becf15de184e7&units=metric&q=`

// let searchBox = document.querySelector('.search input')
// let searchBtn = document.querySelector('.search button')
// let weatherIcon = document.querySelector('.weather-icon')
// async function checkWeather(city){
//     let response = await fetch(api + city +`&appid=${key}`);

//     if(response == '404'){
//         document.querySelector('.error').style.display = 'block';
//         document.querySelector('.weather').style.display = "none";

//     }

//     let result =  await response.json();

//     document.querySelector('.city').innerHTML = result.name ;
//     document.querySelector('.temp').innerHTML = Math.round(result.main.temp)  + "°C" ;
//     document.querySelector('.humidity').innerHTML = result.main.humidity + "%" ;
//     document.querySelector('.wind').innerHTML = result.wind.speed + "Km/h"  ;

//   if(result.weather[0].main == 'Clouds'){
//     weatherIcon.src = "images/clouds.png";
//   }
//   else   if(result.weather[0].main == 'Clear'){
//     weatherIcon.src = "images/clear.png";
//   }
//   else if(result.weather[0].main == 'Drizzle'){
//     weatherIcon.src = "images/drizzle.png";
//   }
//   else   if(result.weather[0].main == 'Snow'){
//     weatherIcon.src = "images/snow.png";
//   }
//   else   if(result.weather[0].main == 'Mist'){
//     weatherIcon.src = "images/mist.png";
//   }
//   else   if(result.weather[0].main == 'Rain'){
//     weatherIcon.src = "images/rain.png";
//   } 

//   document.querySelector('.weather').style.display = "block";
//   document.querySelector('.error').style.display = 'none';

// }
// searchBtn.addEventListener('click', ()=>{
//     checkWeather(searchBox.value);

// })


let key = 'e6a46978e455e6ca908becf15de184e7';
let api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

let searchBox = document.querySelector('.search input')
let searchBtn = document.querySelector('.search button')
let weatherIcon = document.querySelector('.weather-icon')
async function checkWeather(city){
    let response = await fetch(api + city +`&appid=${key}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = "none";
        return;
    }

    let result =  await response.json();

    document.querySelector('.city').innerHTML = result.name ;
    document.querySelector('.temp').innerHTML = Math.round(result.main.temp)  + "°C" ;
    document.querySelector('.humidity').innerHTML = result.main.humidity + "%" ;
    document.querySelector('.wind').innerHTML = result.wind.speed + "Km/h"  ;

  if(result.weather[0].main == 'Clouds'){
    weatherIcon.src = "images/clouds.png";
  }
  else   if(result.weather[0].main == 'Clear'){
    weatherIcon.src = "images/clear.png";
  }
  else if(result.weather[0].main == 'Drizzle'){
    weatherIcon.src = "images/drizzle.png";
  }
  else   if(result.weather[0].main == 'Snow'){
    weatherIcon.src = "images/snow.png";
  }
  else   if(result.weather[0].main == 'Mist'){
    weatherIcon.src = "images/mist.png";
  }
  else   if(result.weather[0].main == 'Rain'){
    weatherIcon.src = "images/rain.png";
  } 

  document.querySelector('.weather').style.display = "block";
  document.querySelector('.error').style.display = 'none';

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);


    searchBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkWeather(searchBox.value);
        }
    });
    
})
