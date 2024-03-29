/** @jsx jsx */
import React from 'react';
import {useHistory} from "react-router-dom";
import { css, jsx } from '@emotion/core';
import Button from "@material-ui/core/Button";

// Styles
const viewMore = css`
  margin: 1rem;
  background: #ace4a6;
  text-decoration: none;
  width: 60%;
  align-self: center;
`;

const linkStyle = css`
  color: white;
  &:hover { text-decoration: none; }
  text-transform: none;
`;

export default function PHButton(props) {
    let history = useHistory()
    function onButtonClick(event) {
      history.push(props.routeTo)
    }
    return (
        <Button css={viewMore} onClick={onButtonClick} color="primary">
                {props.message}
        </Button>
    );
}