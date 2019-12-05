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
function createShedProduct(prodID, type, shedID) {
    return { prodID, type, shedID};
}

const rows = [
    createShedProduct(0, 'Bale', '4'),
    createShedProduct(1, 'Bale', '3'),
    createShedProduct(2, 'Bale', '30'),
    createShedProduct(3, 'Bale', '80'),
    ];

const cardContainer = css`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export default function ShedsCard() {
    return (
        <div css={cardContainer}>
            <h1>Sheds</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell align="right">ShedID</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.prodID}>
                            <TableCell>{row.prodID}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell align="right">{row.shedID}</TableCell>
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