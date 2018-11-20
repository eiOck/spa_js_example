import React, { Component } from 'react';
import { Markup } from 'interweave';
import './style.css';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: true,
            style: 'block',
            icon: '◉',
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({ 
            opened: prevState.opened ? false : true,
            style: prevState.opened ? 'none' : 'block',
            icon: prevState.opened ? '○' : '◉',
        }))
    }

    setVisibility = (part) => {
        return { display: part ? 'block' : 'none' };
    }

    render() {
        const { title, content, code } = this.props.article;
        const { style, icon } = this.state;
        return (
            <div className="Article" style={this.setVisibility(title)}>
                <div className="Article-title-part">
                    <h2 className="Article-title">{title}</h2>
                    <div className="Article-title-control" onClick={() => this.handleClick()}>{icon}</div>
                </div>
                <div className="Article-content" style={{ display: style }}>
                    <Markup content={content} style={this.setVisibility(content)} />
                    <pre className="Article-code" style={this.setVisibility(code)}>{code}</pre>
                </div>
            </div>
        )
    }
}

export default Article;
