/** @jsx jsx */

import React from 'react';
import Layout from "../general/layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PHButton from "../general/PHButton";
import Contracts from "../farmer/contractsCard";
import Container from "@material-ui/core/Container";
import CreateContract from "./createContract";
import { css, jsx } from "@emotion/core";

const gridSpacing = css`
  padding: 1rem;
  margin: 1rem;
`;

export default class contractDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    render = () => {
        return (
            
            <Layout>
                <Grid css={gridSpacing}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={8} md={8} lg={8}>
                                <Paper>
                                    <Contracts id={this.state.id} type="customer"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} md={4} lg={4}>
                                <Paper>
                                    <CreateContract id={this.state.id}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Layout>
    )}
}