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
import IP from '../../IP'

// Generate Order Data
function createProductSummary(type, amount) {
    return { type, amount};
}

const rows = [
    createProductSummary('Grain', 100),
    createProductSummary('Wheat', 50),
    createProductSummary('Canola', 50),

];

const cardContainer = css`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export default class InventorySummary extends React.Component {

    constructor(props) {
        super(props)
        this.rows = []
        this.fetchData()
    }

    fetchData = () => {
        fetch(IP + '/farmer/inventory/inventorySummary/' + this.props.id)
        .then(response => {
            response.json().then(values => {
                for (var value in values) {
                    rows.push(createProductSummary(
                        value.type, value.amount
                    ))
                }
            })
        })
    }

    render = () => {
    return (
        <div css={cardContainer}>
            <h1>Inventory</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Type</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.type}>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );}
}