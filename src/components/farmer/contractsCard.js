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
function createContract(id, custID, contractID, farmID, numLoads, startDate, deliveryByDate, outcome) {
    return { id, custID, contractID, farmID, numLoads, startDate, deliveryByDate, outcome};
}

const rows = [
    createContract(0, '123', '1', '999', '100', 'January 1st, 2020', 'May 21st, 2020', 'pending'),
    createContract(1, '456', '2', '999', '30', 'December 20th, 2019', 'February 3rd, 2020', 'accepted'),
    createContract(2, '789', '3', '999', '80', 'January 10th, 2020', 'January 30th, 2020', 'accepted'),
    createContract(3, '007', '4', '999', '50', 'October 3rd, 2019', 'Decemeber 1st, 2019', 'rejected'),
    createContract(4, '123', '5', '999', '95', 'March 21st, 2020', 'April 1st, 2020', 'pending'),
];

const cardContainer = css`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export default class ContractsCard extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render = () => {
        return (
            <div css={cardContainer}>
                <h1>Contracts</h1>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer ID</TableCell>
                            <TableCell>Contract ID</TableCell>
                            <TableCell>Farm ID</TableCell>
                            <TableCell>Number of Loads</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Expected Delivery Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.custID}</TableCell>
                                <TableCell>{row.contractID}</TableCell>
                                <TableCell>{row.farmID}</TableCell>
                                <TableCell>{row.numLoads}</TableCell>
                                <TableCell>{row.startDate}</TableCell>
                                <TableCell>{row.deliveryByDate}</TableCell>
                                {this.props.type === "farmer" ? (
                                    <TableCell align="right">
                                        <CompleteButton />
                                    </TableCell>
                                ) : (
                                    <TableCell align="right">{row.outcome}</TableCell>
                                )
                                }
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