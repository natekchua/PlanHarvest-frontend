/* eslint-disable no-script-url */
/** @jsx jsx */

import React from 'react';
import Layout from "../general/layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FieldCard from "./fieldCard";
import {css, jsx} from "@emotion/core";

export default function Assets() {
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
                    <Grid item xs={4} md={4} lg={4}>
                        <FieldCard photo="https://unsplash.com/photos/Zm2n2O7Fph4"
                                   name="A"
                                   location="South Point"
                                   bins="5"
                                   sheds="3"/>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <FieldCard name="B"
                                   location="North End"
                                   bins="2"
                                   sheds="10"/>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <FieldCard name="C"
                                   location="Main Headquarters"
                                   bins="8"
                                   sheds="8"/>
                </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}
