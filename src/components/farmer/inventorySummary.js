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

// Generate Order Data
function createProductSummary(type, amount, grade) {
    return { type, amount, grade };
}

const rows = [
    createProductSummary('Grain', 100, 3),
    createProductSummary('Wheat', 50, 2),
    createProductSummary('Canola', 50, 2),

];

const cardContainer = css`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export default function InventorySummary() {
    return (
        <div css={cardContainer}>
            <h1>Inventory</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Type</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.type}>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.grade}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}