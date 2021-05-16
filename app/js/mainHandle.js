'use strict';

const e = (<h1>
    It's working!!!!
</h1>
);

class WeatherCard extends React.Component {
  constructor(props, temp, loc, name) {
    super(props);
    this.state = 
    { 
        yourName: name,
        temperature: temp,
        location: loc
    };
  }
  //A function to potentially change the picture of the weather, something like a state machine

  render() {
    return (
        <div>
            <h1>
                Hi y'all! I'm {this.state.yourName} and I'm in {this.state.location} for the first time and it's {this.state.temperature}!
            </h1>
        </div>
    );
  }
}

// var firstName = prompt("What's your name?");
// var yourHome = prompt("Where are you from?");
var MyCard = new WeatherCard(null, "hot", "the Floss", "Remy");

const domContainer = document.querySelector('#myDOM');
ReactDOM.render(MyCard.render(), domContainer);