import React from 'react';

import IP from '../../IP'
import '../../pages/css/registrationStyle.css';
import Logo from "../general/logo";

export default class FarmerSignUpCard extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            error: false,
            officeLocation: null,
            password: null,
            password2: null,
        }
    }

    onClick = (event) => {
        if (this.state.officeLocation && this.state.password && this.state.password2) {
                if (this.state.password === this.state.password2) {
                    fetch(IP + "authentication/addUser/farmer", {
                        method: 'POST',
                            headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            officeLocation: this.state.officeLocation,
                            password: this.state.password
                        })

                    })
                    .then(response => {
                        if (response.status === 200) {
                            response.text().then(value => {
                                this.props.setFarmerID(value)
                                this.props.history.push('/farmer-dashboard')
                            })
                        } else {
                            this.setState({
                                error: true
                            })
                        }
                    })
                    .catch(err => console.log(err))
                }
            } else {
                this.setState({
                    error: true
                })
            }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render = () => {
        let errorMessage = this.state.error ? <p> Error occurred. Try again </p> : null;
        return (
            <div id="container">
                <div className="form-wrap">
                    <Logo />
                    <p>Sign Up! It's free and only takes a minute</p>
                    {errorMessage}
                    <form>
                        <div className="form-group">
                            <label htmlFor="officeLocation">Office Location</label>
                            <input type="text" name="officeLocation" id="officeLocation" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password" name="password2" id="password2" onChange={this.handleChange}/>
                        </div>
                    </form>
                    <button  type ="submit" className="btn" onClick={this.onClick} >Sign Up</button>

                    <footer>
                        <p>Already have an account? <a href="/login/farmer">Login Here</a></p>
                    </footer>
                </div>

            </div>
        );
    }
}