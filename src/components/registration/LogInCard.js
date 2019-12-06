import React from 'react';

import '../../pages/css/registrationStyle.css';
import Layout from "../general/layout";
import Logo from "../general/logo";
import IP from "../../IP"

export default class LogInCard extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            id: null,
            password: null,
            error: false
        }
    }

        
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClick = (event) => {
        fetch(IP + "authentication/login/" + this.props.type + "/" + this.state.id + "/" + this.state.password + "/")
        .then(response => {
        response.json().then(pass => {
            if(pass) {
                if (this.props.type === "farmer"){
                    this.props.setFarmerID(this.state.id)
                    this.props.history.push("/farmer-dashboard")
                } else {
                    this.props.setCustomerID(this.state.id)
                    this.props.history.push("/contractor-dashboard")
                }
            } else {
                this.setState({
                    error: true
                })
            }
        })})
        .catch(err => console.log(err))
        
    }




    render = () => {
        let errorMessage = this.state.error ? <p>Your ID and password don't match</p> : null

        return (
            <Layout>
                <div id="container">
                    <div className="form-wrap">
                        <Logo />
                        {errorMessage}
                        <form>
                            <div className="form-group">
                                <label htmlFor="User ID">User ID</label>
                                <input type="id" name="id" id="id" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" onChange={this.handleChange}/>
                            </div>
                        </form>
                    </div>
                    <a onClick={this.onClick} type="submit" className="btn">Log In</a>
                </div>
            </Layout>
        );
    }
}

