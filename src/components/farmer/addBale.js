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


export default class AddBale extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            type: "straw",
            fieldID: null,
            storageID: null,
            grade: 0
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
        if (this.state.fieldID && this.state.storageID) {
            fetch(IP + "farmer/inventory/addProduct/bale", {
                method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    baleType: this.state.type,
                    fieldID: this.state.fieldID,
                    storageID:  this.state.storageID,
                    grade: this.state.grade,
                })
            }).then(response => console.log(response))
            .catch(err => console.log(err))
        }
    }


    render = () => {
    return (
        <div css={container}>
            <div css={formWrap}>
                <form>
                    <label css={formGroupLabel} htmlFor="product-type" onChange={this.onChange}>Product Type</label>
                        <select>
                            <option value="straw">Straw</option>
                            <option value="hay">Hay</option>
                        </select>
                    <div css={formGroup}>
                        <label css={formGroupLabel} htmlFor="grade">Grade</label>
                        <div />
                        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" name="grade" defaultValue={0} max={3} onChange={this.handleChange}/>
                        <div />
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="Field ID">Field ID </label>
                        <input type="fieldID" name="fieldID" id="fieldID" onChange={this.handleChange}/>
                    </div>
                    <div css={formGroup}>
                        <label htmlFor="Storage ID">Storage ID</label>
                        <input type="storageID" name="storageID" id="storageID" onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
            <button onClick={this.submitClick} className="btn">Confirm</button>
        </div>
    );}
}