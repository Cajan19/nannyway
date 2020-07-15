import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: myTheme.palette.primary.dark,
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function ProgressSpinner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}