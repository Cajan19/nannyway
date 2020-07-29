import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NannyNavMenu from "./NannyNavMenu";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import myTheme from "../../styling/muiTheme";
import {UserStateContext} from "../../context/user/UserContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#dfe2e7',
    },
    user: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.dark,
    },
    toolbar: {
        minHeight: 72,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    logo: {
        maxWidth: "120px",
    }
}));

export default function NannyAppBar({colorStyle}) {
    const classes = useStyles();

    const {userData} = useContext(UserStateContext);

    return (
        <div className={classes.root}>
            <AppBar position={"static"} className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Grid container
                          direction="row"
                          justify="space-evenly"
                          alignItems="center">
                        <Grid item xs={3}>
                            <NannyNavMenu colorStyle={colorStyle}/>
                        </Grid>
                        <Grid item xs={4}/>
                        <Grid item xs={5}>
                            <img src={"images/nwlogo6-200.png"} alt={"nannyway logo"} className={classes.logo}/>
                        </Grid>
                        <Grid item xs={11} md={6}>
                            <Typography variant={"caption"} className={classes.user}>Hallo {userData.firstName}</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}