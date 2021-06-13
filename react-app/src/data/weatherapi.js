import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
const apiKey = '';
const forecastKey = '';

export const getWeatherData = async (cityname) => {
    try
    {
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`)
        return data;
    }
    catch(error)
    {
        alert(`Error! ${cityname} not found.`);
        console.log(error.stack);
        throw error;
    }
} 

export const getWeatherForecast = async (cityname) => {
    try {
        const {data} = await axios.get(forecastUrl + `q=${cityname}&appid=${forecastKey}`)
        return data;
    }
    catch(error)
    {   
        alert(`Error! ${cityname} not found.`);
        console.log(error.stack);
        throw error;
    }
}