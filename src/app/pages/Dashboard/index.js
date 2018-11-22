import React from 'react';
import logo from '../../assets/images/logo.svg';

class Dashboard extends React.Component {

    componentDidMount = () => {
        /*fetch('https://stag-demo.uhk.cz/ws/services/rest/programy/getStudijniProgramy?fakulta=FIM&outputFormat=JSON',
        {
            mode: 'no-cors',
        })
        .then(res => res.text().then(data => data.parse()))
        .then(text => console.log(text))
        // .then(data => console.log(data))
	*/
    }

    render(){
        return (
            <div className="App">
                <div className="App-dashboard">
                    <img className="App-logo" src={logo} alt="logo" />
                </div>
            </div>
        )
    }
}

export default Dashboard;