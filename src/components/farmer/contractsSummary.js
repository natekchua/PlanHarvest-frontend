/* eslint-disable no-script-url */
/** @jsx jsx */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {css, jsx} from "@emotion/core";
import CompleteButton from "./completeButton";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

// Generate Sample Contract Data
function createContractSummary(status, totalLoads, amount) {
    return { status, totalLoads, amount };
}

const rows = [
    createContractSummary('Completed', '400', '3'),
    createContractSummary('Pending', '60', '1'),
];

const cardContainer = css`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export default function ContractsSummary(props) {
    return (
        <div css={cardContainer}>
            <h1>Contracts</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Amount of Loads</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.status}>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.totalLoads}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    );
}