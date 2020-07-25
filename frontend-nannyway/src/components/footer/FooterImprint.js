import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import FooterButton from "./FooterButton";

const useStyles = makeStyles((theme) => ({
    darkColor: {
        color: myTheme.palette.primary.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    basicTypoButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
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

export default function FooterImprint({colorStyle}) {
    const classes = useStyles();

    const activeFooter = () => {
        if (colorStyle === "secondary") {
            return classes.footerSecondary
        }
        return classes.footerPrimary;
    }

    function toTop() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className={activeFooter()}>
            <Toolbar>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline">
                    <FooterButton
                        colorStyle={colorStyle}
                        onClickAction={toTop}
                        variant={"contained"}
                        classNameButton={classes.basicTypoButton}
                        startIcon={<ArrowUpwardIcon/>}
                        size={"small"}
                        text={"NACH OBEN"}
                    />
                </Grid>
            </Toolbar>
        </footer>
    )
}