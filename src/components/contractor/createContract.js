/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/core";

import "react-datepicker/dist/react-datepicker.css";
import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import GetDate from "./getDate";

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

export default function CreateContract(){
    return (
        <div css={container}>
            <h1>Create Contract</h1>
            <form>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="product-type">Product Type</label>
                    <select>
                        <option value="grain">Canola</option>
                        <option value="wheat">Wheat</option>
                        <option value="barley">Barley</option>
                        <option value="canola">Hay</option>
                        <option value="bale">Straw</option>
                    </select>
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="grade">Number of Loads</label>
                    <div />
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                    <div />
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="location">Grade</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="farm-to-send">Farm ID</label>
                    <input type="text" name="farm" id="farm"/>
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="storage-type">Contract Start Date</label>
                    <GetDate />
                </div>
                <div css={formGroup}>
                    <label css={formGroupLabel} htmlFor="storage-type">Expected Delivery Date</label>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue="yyyy-mm-dd"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div css={formGroup}>
                    <button type="submit" className="btn">Send to Farmer</button>
                </div>
            </form>
        </div>
    );
}