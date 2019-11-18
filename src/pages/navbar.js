import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './css/homeStyle.css'
import home from "./home";

export default class NavBar extends Component {
    render() {
        return (
            <body id={home}>
                <h1 className= "logo">
                    <span className="text-primary">
                        PlanHarvest
                    </span>
                </h1>
                <ul id="navbar">
                    <li><Link to="home.js">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Sign Up</Link></li>
                </ul>
            </body>
        )
    }
}
