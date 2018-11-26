import React from 'react';
import logo from '../../assets/images/logo.svg';

class Dashboard extends React.Component {

    render(){
        return (
            <div className="App">
                <div className="App-dashboard">
                    <img className="App-logo" src={logo} alt="logo" />
                    <p>http://private-c4c61c-eiocktest.apiary-mock.com/data</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;