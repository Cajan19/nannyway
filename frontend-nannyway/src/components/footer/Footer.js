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
    basictypo: {
        fontFamily: "Open Sans",
    },
    footerPrimary: {
        padding: theme.spacing(3),
        backgroundColor: myTheme.palette.primary.light,
    },
    footerSecondary: {
        padding: theme.spacing(3),
        backgroundColor: myTheme.palette.secondary.light,
    },
}));

export default function Footer({colorStyle}) {
    const classes = useStyles();

    const activeFooter = ()=>{
        if (colorStyle === "secondary"){
            return classes.footerSecondary
        }
        return classes.footerPrimary;
    }

    return (
        <footer className={activeFooter()}>
            <Toolbar>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline">
                <Typography variant="h6" align="center" gutterBottom className={classes.basictypo}>
                    Footer
                </Typography>
                <LogoutButton colorStyle={colorStyle}/>
                </Grid>
            </Toolbar>
        </footer>
    )
}