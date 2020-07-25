import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NannyNavMenu from "./NannyNavMenu";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#dfe2e7',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 72,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
}));

export default function NannyAppBar({colorStyle}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={"static"} className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="center">
                        <Grid item>
                            <NannyNavMenu colorStyle={colorStyle}/>
                        </Grid>
                        <Grid item>
                            <img src={"images/nwlogo6-200.png"} alt={"nannyway logo"}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}