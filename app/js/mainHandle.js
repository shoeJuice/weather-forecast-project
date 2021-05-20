'use strict';

//Make api call
function fetchWeather(callback){
    
}

function getWeatherData()
{
  var key = '';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=69216bc1e255a60480a846fcb5004876')
  .then(response => response.json())
  .then((data) =>{
      var weatherArray = data['weather'];
      var mainData = weatherArray[0];
      console.log(mainData['main']);
      return String(mainData['main']);
  })
  .catch(err => alert("Error!"));
}

class WeatherCard extends React.Component {
 
  //A function to potentially change the picture of the weather, something like a state machine
  

constructor(props, clim) {
    super(props);
    this.state = 
    { 
        temperature: clim,
        location: "loc"
    };
  }
  componentWillMount()
  {
    console.log("HIII");
  }
  getData()
  {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=69216bc1e255a60480a846fcb5004876')
    .then(response => response.json())
    .then((data) =>{
        var weatherArray = data['weather'];
        var mainData = weatherArray[0];
        console.log(mainData['main']);
        return String(mainData['main']);
    })
    .catch(err => alert("Error!"));
  }
  componentDidMount()
  {
    console.log("HIIII!");
    this.setState({temperature: this.getWeatherData()});
  }

  render() {
    return (
        
        <div>
            <h1>
                Hi y'all! I'm Remy and I'm in {this.state.location} for the first time and it's {this.state.temperature}!
            </h1>
        </div>
    );
  }
}

// var firstName = prompt("What's your name?");
// var yourHome = prompt("Where are you from?");
var MyCard = new WeatherCard();
var outsideForecast = getWeatherData();
const domContainer = document.querySelector('#myDOM');
ReactDOM.render(MyCard.render(), domContainer);

