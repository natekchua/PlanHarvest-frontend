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


export default class AddWheat extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            type: "wheat",
            fieldID: null,
            storageID: null,
            percentage: null,
            grade: 0,
            hasBad: false
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
        console.log("fetching")
        fetch(IP + "farmer/inventory/addProduct/grain", {
            method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grainType: 'wheat',
                fieldID: this.state.fieldID,
                storageID: this.state.storageID,
                grade: this.state.grade,
                percentage: '15',
                hasBad: true
            })
        }).then(response => this.props.history.push("/farmer-dashboard"))
        .catch(err => console.log(err))
    }


    render = () => {
    return (
        <div css={container}>
            <div css={formWrap}>
                <form>
                    <label css={formGroupLabel} htmlFor="product-type" onChange={this.onChange}>Product Type</label>
                    <div css={formGroup}>
                        <label htmlFor="grade">Grade </label>
                        <input type="fieldID" name="grade" id="grade" onChange={this.handleChange}/>
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="Field ID">Field ID </label>
                        <input type="fieldID" name="fieldID" id="fieldID" onChange={this.handleChange}/>
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="Storage ID">Storage ID</label>
                        <input type="storageID" name="storageID" id="storageID" onChange={this.handleChange}/>
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="percentage">Protein Percentage </label>
                        <input type="fieldID" name="percentage" id="percentage" onChange={this.handleChange}/>
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="hasBad">Does it have ergot? </label>
                        <input type="checkbox" name="hasBad" id="hasBad" onChange={this.handleChange}/>
                    </div>
                </form>
                <button onClick={this.submitClick} className="btn">Confirm</button>
            </div>
        </div>
    );}
}