import React, { Component } from 'react';
import '../pages/css/homeStyle.css';

export default class Showcase extends Component {
    render(){
        return (
            <header id="showcase">
                <div className="showcase-content">
                    <h1 class="l-heading">
                        The Future of <br/>Farm Management
                </h1>
                    <div className="btn-container">
                        <a href="" className="btn lead">I Am a Contractor</a>
                        <a href="" className="btn lead">I Am a Farmer</a>
                    </div>


                </div>
            </header>
        )
    }
}