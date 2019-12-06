/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/core";

import "react-datepicker/dist/react-datepicker.css";
import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import GetDate from "./getDate";
import IP from "../../IP"

const container = css`
    border-top: #344a72;
    max-width: 400px;
    height: 100vh;
    padding: 15px 20px;
    background: white;
    color: #333;
    text-align: center;
    border-radius: 5px;
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

export default class CreateContract extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "canola",
            numLoads: 0,
            grade: 0,
            farmID: null,
            deliveryDate: null,
            customerID: this.props.id
        }
    }

    onChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    gradeChange = (event) => {
        this.setState({
            grade: event.target.value
        })
    }
    numChange = (event) => {
        this.setState({
            numLoads: event.target.value
        })
    }


    submit = (event) => {
        console.log(this.state)
        fetch(IP + "contract/request/" + this.state.type, {
            method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: "canola",
                numLoads: parseInt(this.state.numLoads),
                grade: parseInt(this.state.grade),
                farmID: parseInt(this.state.farmID),
                deliveryDate: this.state.deliveryDate,
                customerID: this.props.id
            })
        }).then(response => console.log(response))
        .catch(err => console.log(err))

    }

    render = () => {
    return (
        <div css={container}>
            <div css={formWrap}>
            <h1>Create Contract</h1>
            <form>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="product-type">Product Type</label>
                    <select onChange={this.onChange}>
                        <option value="canola">Canola</option>
                        <option value="wheat">Wheat</option>
                        <option value="barley">Barley</option>
                        <option value="hay">Hay</option>
                        <option value="bale">Bale</option>
                    </select>
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="grade">Number of Loads</label>
                    <input type="text" name="numLoads" id="numLoads" onChange={this.handleChange}/>

                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="location">Grade</label>
                    <input type="text" name="grade" id="grade" onChange={this.handleChange}/>

                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="farm-to-send" required>Farm ID</label>
                    <input type="text" name="farmID" id="farmID" onChange={this.handleChange}/>
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="storage-type">Expected Delivery Date</label>
                    <TextField
                        id="date"
                        type="date"
                        name="deliveryDate"
                        defaultValue="yyyy-MM-dd"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange}
                    />
                </div>
                
            </form>
            <div css={formGroup}>
                    <button onClick={this.submit} className="btn">Send to Farmer</button>
                </div>
            </div>

        </div>
    );}
}