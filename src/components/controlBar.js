/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import SearchBar from '@material-ui/core/TextField';

//Styles

const buttonStyle = css`
    display: inline-block;
    color: #fff;
    background: #93cb52;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
`;

const navbar = css`
    display: flex;
    position: relative;
    top: 0;
    background: #f5f5f5;
    color: #fff;
    justify-content: space-between;
    z-index: 0;
    padding: 1rem;
`;

export default function ControlBar(props){

    let buttons;

    if (props.forUser === "farmer") {
        buttons = (
            <div>
                <button css={buttonStyle}>Add</button>
                <button css={buttonStyle}>Remove</button>
            </div>);
    } else if (props.forUser === "contractor") {
        buttons = (
            <div>
                <button css={buttonStyle}>Request</button>
                <button css={buttonStyle}>Contact</button>
            </div>);
    }

    return(
      <nav css={navbar}>
          {buttons}
          <SearchBar/>
      </nav>
    );
}