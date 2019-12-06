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
import IP from '../../IP'

// Generate Sample Contract Data
function createContract(id, custID, contractID, farmID, numLoads, startDate, deliveryByDate, outcome) {
    return { id, custID, contractID, farmID, numLoads, startDate, deliveryByDate, outcome};
}


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
        this.state= {
            rows: [],
            delete: null
        }
        this.props.type === "farmer" ? this.getFarmerRows() : this.getCustomerRows()
    }
    getFarmerRows = () => {
       fetch(IP + "contract/getFarmer/" + this.props.id)
       .then(response => {
        response.json().then(values => {
            let i = 0
            let temp = []
            for (var value of values) {
                value.id = i++
                temp.push(value)
            }

            this.setState({
                rows: temp
            })
        })}) .catch(err => console.log(err))
    }

    getCustomerRows =() => {
        fetch(IP + "contract/getCustomer/" + this.props.id)
        .then(response => {
            response.json().then(values => {
                let i = 0
                let temp = []
                for (var value of values) {
                   
                    value.id = i++
                    temp.push(value)

                }
                this.setState({
                    rows: temp
                })
            })
        })
        .catch(err => console.log(err))

    }

    onClick = (event) => {
        fetch(IP + "contract/delete/" + this.state.delete)
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
        let title = this.props.type === "farmer" ? "Contracts" : "Contracts - Your ID: " + this.props.id 
        return (
            <div css={cardContainer}>
                <h1>{title}</h1>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Contract ID</TableCell>
                            <TableCell>Farm ID</TableCell>
                            <TableCell>Product Type</TableCell>
                            <TableCell>Number of Loads</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Expected Delivery Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map(row => (
                            
                            <TableRow key={row.id}>
                                <TableCell>{row.contractid}</TableCell>
                                <TableCell>{row.farmid}</TableCell>
                                <TableCell>{row.producttype}</TableCell>
                                <TableCell>{row.numofloads}</TableCell>
                                <TableCell>{row.startdate}</TableCell>
                                <TableCell>{row.deliverybydate}</TableCell>
                                {this.props.type === "farmer" ? (
                                    <TableCell align="right">
                                        <CompleteButton />
                                    </TableCell>
                                ) : (
                                    <TableCell align="right">{row.rejected}</TableCell>
                                )
                                }

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <form>
                        <label htmlFor="Storage ID">Delete a Contract: Enter Contract ID</label>
                        <input type="" name="delete" id="delete" onChange={this.handleChange}/>
                </form>
                <button onClick={this.onClick} className="btn">Confirm</button>
            </div>

        );
    }
}