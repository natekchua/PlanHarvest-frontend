/** @jsx jsx */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {css, jsx} from "@emotion/core";

const fieldCardStyle = css`
    background: #333 url('../../img/field1.jpg') no-repeat center center/cover;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default function Field(props){
    return (
        <>
            <div css={fieldCardStyle}>
                {/*<img css={fieldCardStyle}>*/}
            </div>
            <Typography>
                HERE IN FIELD {props.name}
            </Typography>

        </>

)
}
