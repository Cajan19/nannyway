import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NannyNavMenu from "./NannyNavMenu";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {UserStateContext} from "../../context/user/UserContext";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#dfe2e7',
    },
    userDisplaySecondary: {
        fontFamily: "Open Sans",
        color: myTheme.palette.secondary.dark,
    },
    userDisplayPrimary: {
        fontFamily: "Open Sans",
        color: myTheme.palette.primary.dark,
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

    const activeUserColor = () => {
        if (colorStyle === "secondary") {
            return classes.userDisplaySecondary;
        }
        return classes.userDisplayPrimary;
    }

    const {userData} = useContext(UserStateContext);

    return (
        <div className={classes.root}>
            <AppBar position={"static"} className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Grid container
                          direction="row"
                          justify="space-evenly"
                          alignItems="center">
                        <Grid item xs={1}>
                            <NannyNavMenu colorStyle={colorStyle}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography align={"center"} variant={"caption"} className={activeUserColor()}>
                                Hallo {userData.firstName}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={4}>
                            <img src={"images/nwlogo6-200.png"} alt={"nannyway logo"} className={classes.logo}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}