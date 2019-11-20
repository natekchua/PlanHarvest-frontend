/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h1>Assets</h1>
            <Typography component="p" variant="h6">
                Field A
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Located on South End
                <p>Bins: 5</p>
                <p>Sheds: 8</p>
            </Typography>
            <div>
                <Link color="primary" href="javascript:;">
                    View Assets
                </Link>
            </div>
        </React.Fragment>
    );
}