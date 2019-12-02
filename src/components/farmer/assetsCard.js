/* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    centerButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

export default function AssetsCard() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h1>My Farm</h1>
            <Typography component="p" variant="h6">
                Field A
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Located on South End
                <p>Bins: 5</p>
                <p>Sheds: 8</p>
            </Typography>
        </React.Fragment>
    );
}