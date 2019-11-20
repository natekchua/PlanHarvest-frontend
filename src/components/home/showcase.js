import React, { Component } from 'react';
import '../../pages/css/homeStyle.css';

export default class Showcase extends Component {
    render(){
        return (
            <header id="showcase">
                <div className="showcase-content">
                    <h1 className="l-heading">
                        The Future of <br/>Farm Management
                    </h1>
                    <div className="btn-container">
                        <a href="signup" className="btn lead">I Am a Contractor</a>
                        <a href="signup" className="btn lead">I Am a Farmer</a>
                    </div>
                </div>
            </header>
        )
    }
}