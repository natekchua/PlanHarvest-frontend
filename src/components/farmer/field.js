/** @jsx jsx */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {css, jsx} from "@emotion/core";
import FieldCard from "./fieldCard";

const fieldCardStyle = css`
    background: #333 url('../../img/field1.jpg') no-repeat center center/cover;
    //height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default function Field(props){
    return (
        <>
            <FieldCard/>
            {/*<header css={fieldCardStyle} />*/}

            {/*/!*</header>*!/*/}
            {/*<Typography>*/}
            {/*    HERE IN FIELD {props.name}*/}
            {/*</Typography>*/}

        </>

)
}
