//API
const dogURL = 'https://dog.ceo/api/breeds/image/random'


//QUERIES
const dogButton = document.querySelector('#dog-button')
const dogImg = document.querySelector('img')


const weatherButton = document.querySelector('#weather-it-up')



//GLOBAL VARIABLE

// const weatherCodeObj = {
//     0: "Clear Skies",
//     1: "Mainly Clear",
//     2: "Partly Cloudy",
//     3: "Overcast",
//     45: "Fog",
//     48: "Depositing Rime Fog",
//     51: "Drizzle: Light",
//     53: "Drizzle: Moderate",
//     55: 'Drizzle: Dense',
//     56: "Freezing Drizzle: Light",
//     57: "Freezing Drizzle: Dense",
//     61: "Rain: Light",
//     63: "Rain: Moderate",
//     65: "Rain: Heavy",
//     66: "Freezing Rain: Light",
//     67: "Freezing Rain: Heavy",
//     71: "SnowFall: Slight",
//     73: "SnowFall: Moderate",
//     75: "SnowFall:Heavy",
//     77: "Snow Grains",
//     80: "Rain Showers: Slight",
//     81: "Rain Showers: Moderate",
//     82: "Rain Showers: Heavy",
//     85: "Snow Showers: Slight",
//     86: "Snow Showers: Heavy",
//     95: "Thunderstorm: Slight",
//     96: "Thunderstorm with Slight Hail",
//     99: "Thunderstorm with Heavy Hail"
// } 

//HELPER FUNCTION


    
    const weatherCodeObj = {
        0: "Clear Skies",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing Rime Fog",
        51: "Drizzle: Light",
        53: "Drizzle: Moderate",
        55: 'Drizzle: Dense',
        56: "Freezing Drizzle: Light",
        57: "Freezing Drizzle: Dense",
        61: "Rain: Light",
        63: "Rain: Moderate",
        65: "Rain: Heavy",
        66: "Freezing Rain: Light",
        67: "Freezing Rain: Heavy",
        71: "SnowFall: Slight",
        73: "SnowFall: Moderate",
        75: "SnowFall:Heavy",
        77: "Snow Grains",
        80: "Rain Showers: Slight",
        81: "Rain Showers: Moderate",
        82: "Rain Showers: Heavy",
        85: "Snow Showers: Slight",
        86: "Snow Showers: Heavy",
        95: "Thunderstorm: Slight",
        96: "Thunderstorm with Slight Hail",
        99: "Thunderstorm with Heavy Hail"
    } 

    // let weatherArr = Object.keys(weatherCodeObj)
    // let codedWeather = ''
    // for(let i = 0; i < weatherArr.length; i++){
    //     while(element > weatherArr.length){
    //         codedWeather += weatherArr[i]
    //     }
    // } return codedWeather
    // // for(let num in weatherCodeObj){
    // //     console.log(`${num}: ${weatherCodeObj[num]}`)
    //     // let name = weatherCodeObj[num]
    //     //loop through num and return value
        
    // }





//EVENT LISTENERS

dogButton.addEventListener('click',(event)=>{
    console.log('received dog button')
    event.preventDefault()
//click listener on button {wrapping all below}

fetch(dogURL)
    .then((response)=>{
        console.log('response received')
        console.log((response))
        return response.json()
    })
    .then((object)=>{
        console.log('response processed')
        //do something with this data
        console.log(object.message)
        dogImg.src = object.message
        
        console.log(object)   //link to picture / aka source code & display picture
   
    })
    .catch((error) => console.log(error))
})


weatherButton.addEventListener('click', (event)=>{
    console.log('received weather button')
    event.preventDefault()

   
    // const weatherInput = document.querySelector('.coordinates')
    // const weatherInputValue = weatherInput.value 
    // console.log(weatherInputValue)
    const latitude = document.querySelector('#latitude')
    const longitude = document.querySelector('#longitude')
    // const weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude=36.1659&longitude=-86.7844&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph'
    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`
    
    //build weather URL make whole string in text and set to template literals
       //insert variabes into URL
       //click button query latitude & longitude  values

    // console.log(weatherInput)

    fetch(weatherURL)
      .then((information)=>{  
            console.log('information received')
            console.log(information)
            return information.json()
        })
          

        .then((obj)=>{
            console.log('information processed')
            console.log(obj)
            //do something with data
                       
            const temperature = document.querySelector('#temperature')
            const wind = document.querySelector('#wind')
            const forecastDescription = document.querySelector('#description')
           
            temperature.innerHTML = obj.current.temperature_2m
            wind.innerHTML = obj.current.wind_speed_10m
            forecastDescription.innerHTML = weatherCodeObj[obj.current.weather_code]        
           
            console.log(obj)
        })
        .catch((error) => console.log(error))
})