import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import './App.css';

import Dashboard from './pages/Dashboard';
import Frontend from './pages/Frontend';
import AdditSources from './pages/AdditSources';
import Nav from './components/Nav';

class App extends Component {
  render() {
    const items = [ 
      {
        path: '/',
        title: 'Přehled',
        component: Dashboard
      },
      {
        path: '/frontend',
        title: 'Frontend',
        component: Frontend,
      },
      {
        path: '/sources',
        title: 'Zdroje',
        component: AdditSources,
      }
    ]
    const App = () => (
      <div>
        <Nav items={items} />
      </div>
    )
    return (
     <Switch>
       <App />
     </Switch> 
    );
  }
}

export default App;
