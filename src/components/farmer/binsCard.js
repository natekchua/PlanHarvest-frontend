/* eslint-disable no-script-url */
/** @jsx jsx */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { css, jsx } from '@emotion/core';
import PHButton from "../general/PHButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import IP from "../../IP"

// Generate Order Data
function createProduct(prodID, fieldID, type, grade, dateStored) {
    return { prodID, fieldID, type, grade, dateStored};
}

const rows = [
    createProduct(0, 'A', 'Grain', '400', 'January 1st, 2020'),
    createProduct(1, 'A', 'Wheat', '30', 'December 20th, 2019'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
    createProduct(2, 'A', 'Barley', '80', 'January 10th, 2020'),
];

const cardContainer = css`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export default class BinsCard extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount () {
        fetch(IP + "farmer/assets/displayBins" + this.props.id)
        .then()
    }



    render = () => {
    return (
        <div css={cardContainer}>
            <h1>Bins</h1>
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
                    {rows.map(row => (
                        <TableRow key={row.prodID}>
                            <TableCell>{row.prodID}</TableCell>
                            <TableCell>{row.fieldID}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.grade}</TableCell>
                            <TableCell align="right">{row.dateStored}</TableCell>
                            <TableCell>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
    }
}