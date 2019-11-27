import React from 'react';

import '../../pages/css/registrationStyle.css';
import Layout from "../layout";

export default class LogInCard extends React.Component{
    testClick = (event) => {
        fetch("https://plan-harvest.herokuapp.com/")
        .then(response => console.log(response.json()));
    };

    render = () => {
        return (
            <Layout>
                <div id="container">
                    <div className="form-wrap">
                        <h1>PlanHarvest</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username" name="username" id="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password"/>
                            </div>
                            <a onClick={this.testClick} type="submit" className="btn">Log In</a>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    }
}

