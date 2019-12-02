import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    container: {
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem',
        background: 'white',
    }
});

export default function StorageCard(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <h2>{props.name}</h2>
            <Typography component="p" variant="h5">
                {props.amount} {props.name}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                {props.products}
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Edit
                </Link>
            </div>
        </Container>
    );
}