import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="main-footer" className="bg-dark text-center py-1">
                <div className="container">
                    <p>{ `Copyright & ${new Date().getFullYear()}, PlanHarvest, All Rights Reserved`}</p>
                </div>
            </footer>

        )
    }
}
