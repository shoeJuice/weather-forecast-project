import logo from './logo.svg';
import './dist/style.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {getWeatherData} from './data/weatherapi';
import {getWeatherForecast} from './data/weatherapi';



function App() {
    var myWeather = "null";
   

    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('New York');
    const [loading, setLoading] = useState(false);
    const [weatherforecast, setForecast] = useState(null);
    const [today, setDate] = useState(null);
    
    
    const getData = async () => {
        try{
            const data = await getWeatherData(city);
            //const fcast = await getWeatherForecast(city);
            setWeatherData(data);
            //setForecast(fcast);
            console.log(data);
            //console.log(fcast);
        }
        catch(error)
        {
            console.log(error.message);
        }
    }


    const handleSubmit = () => {
        getData();
    }

    const handleKey = e => {
        if(e.key === 'Enter')
        {
            console.log("Hi! We read your request, gimme a sec.");
            handleSubmit();
        }
    }

    useEffect(() =>{
        var todayDate = new Date();
        
        getData(); 
        setDate(todayDate.toDateString());
        
        
    }, []);
    return (
        <section class="splash">
            <header>
                <h1>Welcome</h1>
                <input class="inpBox"
                    type="text"
                    onChange = {e => {
                        e.preventDefault();
                        setCity(e.target.value);
                        }
                    }
                    onKeyPress = {handleKey}
                    ></input>
            </header>
            <div class="mainScriptContainer">
                <div class="mainScriptUpperHalf">
                {weatherdata !== null ? (
                    <div class="upperHalfCardContainer" id="myDOM">
                        <div>
                            <b>{weatherdata.name}</b>
                            <br></br>
                            {today}
                            <br></br>
                            {parseFloat((weatherdata.main.temp - 273.15) * (9/5) + 32).toFixed(1)} &deg;F
                            <br></br>
                            {weatherdata.weather[0].main}
                        </div>
                    </div>
                    ) :
                        <div class="upperHalfCardContainer">
                            Null
                        </div>
                    }
                    {weatherdata !== null? (
                        <div class="upperHalfSplitContainer">
                            <div class="infoBox">
                                <div class="extraStats">
                                    <div>
                                        <b>Feels</b>
                                        <br></br>
                                        {parseFloat((weatherdata.main.feels_like - 273.15) * (9/5) + 32).toFixed(1)} &deg;F
                                    </div> 
                                    <div>
                                        <b>Low</b>
                                        <br></br>
                                        {parseFloat((weatherdata.main.temp_min - 273.15) * (9/5) + 32).toFixed(1)} &deg;F
                                    </div> 
                                    <div>
                                        <b>High</b>
                                        <br></br>
                                        {parseFloat((weatherdata.main.temp_max - 273.15) * (9/5) + 32).toFixed(1)} &deg;F
                                    </div> 
                                </div>
                                <div>
                                        <b>Wind Speed</b>
                                        <br></br>
                                        {parseFloat((weatherdata.wind.speed) * 2.237).toFixed(1)} MpH
                                </div>
                            </div>
                    </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default App;
