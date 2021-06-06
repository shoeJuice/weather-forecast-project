import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '69216bc1e255a60480a846fcb5004876';

export const getWeatherData = async (cityname) => {
    try
    {
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`)
        return data;
    }
    catch(error)
    {
        throw error;
    }
} 