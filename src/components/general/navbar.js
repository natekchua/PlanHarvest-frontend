import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navbar">
                <Logo />
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Services</Link></li>
                </ul>
            </nav>
        )
    }
}
