/* eslint-disable no-script-url */
/** @jsx jsx */

import React from 'react';
import Layout from "../general/layout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Field from "./field";
import {css, jsx} from "@emotion/core";

const gridItemStyle = css`
     background: #dbf5d1;
     padding: 1rem;
     margin: 1rem;
`;

export default function Assets() {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    >
                    <Grid item xs={3} md={3} lg={3}>
                        <Paper css={gridItemStyle}>
                            <Field name="A"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <Paper css={gridItemStyle}>
                            <Field name="B"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <Paper css={gridItemStyle}>
                            <Field name="C"/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}
