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
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    }
});

export default function AssetsCard() {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.centerContent}>My Farm</h1>
                <div className={classes.centerContent}>
                    <Typography component="p" variant="h6">
                        Fields: 3<br/>
                        Bins: 6<br/>
                        Sheds: 8<br/>
                    </Typography>
                </div>
        </>
    );
}