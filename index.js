




const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMessage = document.querySelector('.error');
const date = document.querySelector('.date');
const cityName = document.querySelector('.cityName');
const img = document.querySelector('img');
const temperatureDescription = document.querySelector('.temperatureDescription');
const temperature = document.querySelector('.temperature');
const feelsTemperature = document.querySelector('.feelsTemparature');
const pressure = document.querySelector('.pressure');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=f0b033e60c3f9c90a7461d7baab20783';
const apiUnits = '&units=metric';
const apiLang = '&lang=en';

const checkWeather = () => {
    const apiCity = input.value || 'Warsaw';
    const URL = apiLink + apiCity + apiKey + apiUnits + apiLang;
    console.log(URL)

    axios.get(URL).then(response => {
        console.log(response.data);
        date.textContent = `${new Date().toString().slice(4,21)}`;
        cityName.textContent = `${response.data.name}, ${response.data.sys.country}`;
        temperature.textContent = `${Math.floor(response.data.main.temp)}°C`;
        temperatureDescription.textContent = `${response.data.weather[0].description}`;
    }).catch(error => {
        if (error.response.data.cod == '404') {
            errorMessage.textContent = 'Nie ma takiego miasta'
        }
        [date, cityName, temperature, temperatureDescription, country].forEach(el => {
            el.textContent = ''
        })
    }).finally(() => {
    })
        
}

button.addEventListener('click', checkWeather);
