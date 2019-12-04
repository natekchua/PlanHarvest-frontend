/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/core";

import "react-datepicker/dist/react-datepicker.css";
import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";

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

const formGroupInput = css`
    width: 100%;
    border: #ddd 1px solid;
    border-radius: 5px;
    display: block;
    padding: 10px;
`;

// const formWrapButton = css`
//     width: 100%;
//     display: block;
//     background-color: #49c1a2;
//     padding: 10px;
//     margin-top: 20px;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// `;
//
//
// .form-wrap button:hover {
//     /*
//       Hover background color for button is #37a08e
//     */
//     background-color: #37a08e;


const bottomText = css`
    font-size: 13px;
    margin-top: 20px;
`;

const state = {
    startDate: new Date()
};

const handleChange = date => {
    this.setState({
        startDate: date
    });
};

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


export default function EditProduct(){
    return (
        <body>
        <div css={container}>
            <div css={formWrap}>
                <h1>Add Product</h1>
                <form>
                    <div css={formGroup}>
                        <label css={formGroupLabel} htmlFor="product-type">Product Type</label>
                        <select>
                            <option value="grain">Grain</option>
                            <option value="wheat">Wheat</option>
                            <option value="barley">Barley</option>
                            <option value="canola">Canola</option>
                            <option value="bale">Canola</option>
                        </select>
                    </div>
                    <div css={formGroup}>
                        <label css={formGroupLabel} htmlFor="grade">Grade</label>
                        <div />
                        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                        <div />
                        {/*<input css={formGroupInput} type="text" name="lastName" id="last-name"/>*/}
                    </div>
                    <div css={formGroup}>
                        <label css={formGroupLabel} htmlFor="location">Location</label>
                        <select>
                            <option value="field-a">Field A</option>
                            <option value="field-b">Field B</option>
                        </select>
                    </div>
                    <div css={formGroup}>
                        <label css={formGroupLabel} htmlFor="storage-type">Storage Type</label>
                        <select>
                            <option value="bin">Bin</option>
                            <option value="shed">Shed</option>
                        </select>
                    </div>
                        <button type="submit" className="btn">Confirm</button>
                </form>
            </div>
        </div>
        </body>
    );
}