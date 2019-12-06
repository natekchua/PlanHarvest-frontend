/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/core";

import "react-datepicker/dist/react-datepicker.css";
import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";
import { thisExpression } from '@babel/types';
import IP from '../../IP'

const container = css`
    border-top: #344a72;
    margin: 30px auto;
    max-width: 400px;
    padding: 20px;
`;

const formWrap = css`
    background: white;
    padding: 15px 25px;
    color: #333;
    text-align: center;
`;

const formGroup = css`
    margin-top: 15px;
`;

const formGroupLabel = css`
    display: block;
    color: #666;
`;

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
    height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
    },
},
active: {},
valueLabel: {
    left: 'calc(-50% + 4px)',
},
track: {
    height: 8,
        borderRadius: 4,
},
rail: {
    height: 8,
        borderRadius: 4,
},
})(Slider);


export default class AddBin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            fieldID: null,
            location: null,
        }
    }

    onChange = (event) => {
        this.setState({
            type: event.value
        })
        this.pickForm()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitClick = (event) => {
        fetch(IP + "farmer/assets/addBin", {
            method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location: this.state.location,
                fieldID: this.state.fieldID
            })
        }).then(response => this.props.history.push("/farmer-dashboard"))
        .catch(err => console.log(err))
    }


    render = () => {
    return (
        <div css={container}>
            <div css={formWrap}>
                <form>
                    <div css={formGroup}>
                        <label htmlFor="Field ID">Field ID </label>
                        <input  name="fieldID" id="fieldID" onChange={this.handleChange}/>
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="location">Location </label>
                        <input  name="location" id="location" onChange={this.handleChange}/>
                    </div>
                </form>
                <button onClick={this.submitClick} className="btn">Confirm</button>
            </div>
        </div>
    );}
}