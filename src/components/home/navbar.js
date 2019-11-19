import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../../pages/css/homeStyle.css'
import home from "../../pages/home";

export default class NavBar extends Component {
    // constructor(props){
    //     super(props)
    // }
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
