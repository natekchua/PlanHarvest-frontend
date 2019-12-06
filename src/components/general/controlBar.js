/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import SearchBar from '@material-ui/core/TextField';
import {Link} from "react-router-dom";

//Styles

const buttonStyle = css`
    display: inline-block;
    color: #fff;
    background: #93cb52;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const linkStyle = css`
  text-decoration: none;
  color: white;
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

    function addProductOnClick(event) {
        props.history.push("/edit-product")
    }

    function addBinClick(event) {
        props.history.push("/edit-bin")
    }

    function addShedClick(event) {
        props.history.push("/edit-shed")
    }

    let buttons;

    if (props.forUser === "farmer") {
        if(props.type === "product"){
            buttons = (
                <div>
                    <button css={buttonStyle} onClick={addProductOnClick}>
                        Add Product
                    </button>
                    <button css={buttonStyle} onClick={addBinClick}>
                        Add Bin
                    </button>
                    <button css={buttonStyle} onClick={addShedClick}>
                        Add Shed
                    </button>
                </div>);
        }
        else if(props.type === "contract"){
            buttons = (
                <div>
                    <Link css={linkStyle} to="edit-contract">
                        <button css={buttonStyle}>
                            Add
                        </button>
                    </Link>
                </div>);
        }

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