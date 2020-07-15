import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import LogoutButton from "./LogoutButton";

const useStyles = makeStyles((theme) => ({
    darkColor: {
        color: myTheme.palette.primary.dark,
    },
    footer: {
        padding: theme.spacing(3),
        backgroundColor: myTheme.palette.primary.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Toolbar>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline">
                <Typography variant="h6" align="center" gutterBottom className={classes.basictypo}>
                    Footer
                </Typography>
                <LogoutButton />
                </Grid>
            </Toolbar>
        </footer>
    )
}