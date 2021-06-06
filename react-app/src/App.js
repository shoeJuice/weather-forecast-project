import logo from './logo.svg';
import './dist/style.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {getWeatherData} from './data/weatherapi';



function App() {
    var myWeather = "null";
    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('New York');
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try{
            const data = await getWeatherData(city);
            setWeatherData(data);
            console.log(data);
        }
        catch(error)
        {
            console.log(error.message);
        }
    }

    useEffect(() =>{
        getData(); 
    }, []);
    return (
        <section class="splash">
            <header>
                <h1>Welcome</h1>
                <p>Search bar goes here</p>
            </header>
            <div class="mainScriptContainer">
                <div class="mainScriptUpperHalf">
                {weatherdata !== null ? (
                    <div class="upperHalfCardContainer" id="myDOM">
                        <div>{weatherdata.weather[0].main}</div>
                    </div>
                    ) : null}
                    <div class="upperHalfSplitContainer">
                        <div>
                            <p>Placeholder Text</p>
                        </div>
                        <div>
                            <p>Placeholder Text</p> 
                        </div>
                    </div>
                </div>
                <div class="mainScriptLowerHalf">
                    <div>
                        <p>Placeholder Text</p> 
                    </div>
                    <div>
                        <p>Placeholder Text</p> 
                    </div>
                    <div>
                        <p>Placeholder Text</p> 
                    </div>
                    <div>
                        <p>Placeholder Text</p> 
                    </div>
                    <div>
                        <p>Placeholder Text</p> 
                    </div>
                    <div>
                        <p>Placeholder Tex</p> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
