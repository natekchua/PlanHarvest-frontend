/** @jsx jsx */

import React from 'react';
import {css, jsx} from "@emotion/core";
import Layout from "../general/layout";
import ControlBar from "../general/controlBar";
import Divider from "@material-ui/core/Divider";
import StorageCard from './storageCard';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Field(){
    return (
        <Layout>
            <Container css={centerContent}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={8} md={8} lg={8}>
                        <StorageCard name="Bins" amount="8" products="Wheat and Barley"/>
                    </Grid>
                    <Grid item xs={8} md={8} lg={8}>
                        <StorageCard name="Sheds" amount="5" products="Canola"/>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}
