/* eslint-disable no-script-url */
/** @jsx jsx */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { css, jsx } from '@emotion/core';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import IP from "../../IP";

// Generate Order Data
function createProduct(prodID, fieldID, type, grade, dateStored) {
    return { prodID, fieldID, type, grade, dateStored};
}

// const rows = [
//     createProduct(0, 'A', 'Grain', '400', 'January 1st, 2020'),
//     createProduct(1, 'A', 'Wheat', '30', 'December 20th, 2019'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
//     createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
// ];

const cardContainer = css`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export default class InventoryCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            delete: null
        }
        this.getProductTuples()
    }

    getProductTuples = () => {
        console.log("displaying")
        fetch(IP + "farmer/inventory/view/" + this.props.id)
            .then(response => {
                response.json().then(values => {
                    let i = 0;
                    let temp = [];
                    for (var value of values) {
                        value.id = i++;
                        temp.push(value)
                    }

                    this.setState({
                        rows: temp
                    })
                })}) .catch(err => console.log(err))
    };

    onClick = (event) => {
        fetch(IP + "farmer/inventory/delete" + this.state.delete)
            .then(response => { console.log(response)
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render = () => {
        return (
        <div css={cardContainer}>
            <h1>Inventory</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Field ID</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell align="right">Date Stored</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.rows.map(row => (
                        <TableRow key={row.productid}>
                            <TableCell>{row.productid}</TableCell>
                            <TableCell>{row.fieldid}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.grade}</TableCell>
                            <TableCell align="right">{row.datestored}</TableCell>
                            {/*<TableCell>*/}
                            {/*    <IconButton aria-label="delete">*/}
                            {/*        <DeleteIcon />*/}
                            {/*    </IconButton>*/}
                            {/*</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <form>
                <label htmlFor="Product ID">Delete a Product: Enter Product ID</label>
                <input type="" name="delete" id="delete" onChange={this.onHandleChange}/>
            </form>
            <button onClick={this.onClick} className="btn">Confirm</button>
        </div>
    );
    }
}
