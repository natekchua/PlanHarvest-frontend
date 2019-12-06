/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/core";

import "react-datepicker/dist/react-datepicker.css";
import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";
import { thisExpression } from '@babel/types';
import AddBale from "./addBale"
import AddWheat from "./addWheat"
import AddCanola from "./addCanola"
import AddBarley from "./addBarley"

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


export default class EditProduct extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            typeForm: <AddBale></AddBale>
        }
    }

    onChange = (event) => {

        switch(event.target.value) {
            case "bale":
                this.setState({typeForm: <AddBale history={this.props.history} ></AddBale>})
                break
            case "wheat":
                this.setState({typeForm: <AddWheat history={this.props.history}></AddWheat>})
                break
            case "barley":
                this.setState({typeForm: <AddBarley history={this.props.history}></AddBarley>})
                break
            case "canola":
                this.setState({typeForm: <AddCanola history={this.props.history}></AddCanola>})
                break
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render = () => {
    return (
        <body>
        <div css={container}>
            <div css={formWrap}>
                <h1>Add Product</h1>
                <form>
                    <div css={formGroup}>
                        <label css={formGroupLabel} htmlFor="product-type" >Product Type</label>
                        <select onChange={this.onChange}>
                            <option value="bale">Bale</option>
                            <option value="wheat">Wheat</option>
                            <option value="barley">Barley</option>
                            <option value="canola">Canola</option>
                        </select>
                    </div>
                </form>
                {this.state.typeForm}
                </div>
            </div>
        </body>
    );}
}