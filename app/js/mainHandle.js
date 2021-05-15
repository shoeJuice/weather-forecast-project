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
                <p>Hi! Is this working?</p>
            </div>
            )
    }
}

document.getElementById('mainCard').innerHTML = "Testing";
