class welcomeHome extends React.Component{
    constructor(props){
        super(props);
        state = {
            location: '',
            weather: ''
        }  
    }
    

    render() {
        return(
            <div>
                <h2>Hi! Is this working?</h2>
            </div>
            )
    }
}

document.getElementById('mainCard').innerHTML = "Testing";
