import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navbar">
                <h1 className= "logo">
                    <span className="text-primary">
                        PlanHarvest
                    </span>
                </h1>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Services</Link></li>
                </ul>
            </nav>
        )
    }
}
