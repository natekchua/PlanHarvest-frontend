/** @jsx jsx */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PHButton from "../general/PHButton";
import {css, jsx} from "@emotion/core";
import Container from "@material-ui/core/Container";
import DashboardLayout from "../general/dashboardLayout";

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(14),
        height: '100%',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    centerBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));


export default function FieldCard(props) {
    const classes = useStyles();
    return (
        <>
            {/*<DashboardLayout/>*/}
            <Container className={classes.cardGrid} maxWidth="md">
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Field {props.name}
                        </Typography>
                        <Typography>
                            Location: {props.location}<br/>
                            Bins: {props.bins}<br/>
                            Sheds: Future Update<br/>
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.centerBtn}>
                        <PHButton message="Manage" routeTo="farmer-field-manager"/>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}