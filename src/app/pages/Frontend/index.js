import React from 'react';
import Article from '../../components/Article';
import { articles } from '../../assets/articles';

const Frontend = () => (
    <div className="App">
    {
        articles.map((item, key) => <Article article={item} key={key} />)
    }
    </div>
);

export default Frontend;