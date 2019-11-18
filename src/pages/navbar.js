import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
                    <li className="navButton"><Link to="">About</Link></li>
                    <li className="navButton"><Link to="">Sign Up</Link></li>
                </ul>
            </header>
        )
    }
}
