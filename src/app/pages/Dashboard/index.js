import React from 'react';
import logo from '../../assets/images/logo.svg';

class Dashboard extends React.Component {

    componentDidMount = () => {
        fetch('https://stag-demo.uhk.cz/ws/services/rest/programy/getStudijniProgramy?fakulta=FIM&outputFormat=JSON',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => console.log(response));
    }

    render(){
        return (
            <div className="App" style={{ backgroundColor: 1123456 }}>
                <div className="App-dashboard">
                    <img className="App-logo" src={logo} alt="logo" />
                </div>
            </div>
        )
    }
}

export default Dashboard;