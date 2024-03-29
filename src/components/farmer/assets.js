/* eslint-disable no-script-url */
/** @jsx jsx */

import React from 'react';
import Layout from "../general/layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FieldCard from "./fieldCard";
import {css, jsx} from "@emotion/core";
import IP from "../../IP"

export default class Assets extends React.Component {

    constructor(props) {
        super(props)
        this.grids = []


        this.fetchFields()
    }

    fetchFields = () => {
        fetch(IP + "farmer/assets/fieldSummary/" + this.props.id)
        .then(response => {
            response.json().then(values => {
                for(var value of values) {
                    console.log(value)
                    this.grids.push(value)

                }
                console.log(this.grids)
            })
        })
        .catch(err => console.log(err))
    }

    render =() => {
        console.log(this.grids)
    return (
        <Layout>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    justifyContent="center"
                    alignItems="center"
                    >
                        {this.grids.map(grid => (
                            <FieldCard photo="https://unsplash.com/photos/Zm2n2O7Fph4"
                           name={grid.fieldid}
                           location={grid.location}
                           bins={grid.count}/>
                        ))}
                        
                </Grid>
            </Container>
        </Layout>
    );}
}
