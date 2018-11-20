import React from 'react';
import './style.css'

const sources = [
    {
        title: 'Tutorial: Intro to React',
        src: 'https://reactjs.org/tutorial/tutorial.html',
    },
    {
        title: 'SoloLearn - JavaScript',
        src: 'https://www.sololearn.com/Course/JavaScript/',
    },
    {
        title: 'React Redux: Tutorial for Beginners',
        src: 'https://www.valentinog.com/blog/react-redux-tutorial-beginners/',
    },
    {
        title: 'Redux - Ducks pattern',
        src: 'https://github.com/erikras/ducks-modular-redux',
    },
    {
        title: 'React: Creating a Single Page App',
        src: 'https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm',
    },
]

const AdditSources = () => (
    <div className="App-container">
        <h2 className="App-h2">Odkazy s obsáhlejšími materiály</h2>
        <ul className="AdditSources-links">
            {
                sources.map((item, key) => 
                    <li className="AdditSources-items" key={key}>
                        <a
                            className="App-a-href"
                            href={item.src}
                        >
                            {item.title}
                        </a>
                    </li>)
            }
        </ul>
    </div>
);

export default AdditSources;