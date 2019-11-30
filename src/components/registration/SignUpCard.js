import React from 'react';

import '../../pages/css/registrationStyle.css';
import Logo from "../general/logo";

export default class SignUpCard extends React.Component{
    render = () => {
        return (
            <div id="container">
                <div className="form-wrap">
                    <Logo />
                    <p>Sign Up! It's free and only takes a minute</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" name="firstName" id="first-name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" name="lastName" id="last-name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Choose Username</label>
                            <input type="username" name="username" id="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password" name="pasword2" id="password2"/>
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                    <footer>
                        <p>Already have an account? <a href="login">Login Here</a></p>
                    </footer>
                </div>

            </div>
        );
    }
}