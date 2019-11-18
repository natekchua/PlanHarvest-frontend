import React from 'react';

//Import homepage components
import NavBar from "./navbar";
import Footer from "./footer";

import style from './css/homeStyle.css';

export default class HomePage extends React.Component {
    render = () => {
        return (
            <div className="container">
                <NavBar />
                {/*<ShowCase />*/}
                <Footer />
            </div>


            // <div className='container' >
            //     PlanHarvest
            // </div>
        );
    }

}