import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import './style.css';

const Nav = ({ items }) => (
    <div>
        <div className="Nav">
            {
                items.map((item, key) => 
                    <NavLink className="Nav-item" key={key} exact to={item.path} activeClassName="Nav-item-active" >
                        <p>{item.title}</p>
                    </NavLink>
                )
            }
            <hr className="Nav-divider" />
        </div>
        <Switch>
        {
            items.map((item, key) => <Route exact path={item.path} component={item.component} key={key} />)
        }
        </Switch>
    </div>
);

export default Nav;
