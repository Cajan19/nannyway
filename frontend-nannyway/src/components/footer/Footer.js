import React, {useContext} from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import FooterButton from "./FooterButton";
import {UserDispatchContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {removeJWTToken} from "../../utils/jwt-utils";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const useStyles = makeStyles((theme) => ({
    basicTypoButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.primary.contrastText,
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

    const activeFooter = () => {
        if (colorStyle === "secondary") {
            return classes.footerSecondary
        }
        return classes.footerPrimary;
    }

    function toTop() {
        document.documentElement.scrollTop = 0;
    }

    const dispatch = useContext(UserDispatchContext);

    function logout() {
        dispatch({type: LOGOUT})
        removeJWTToken()
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
                    <FooterButton
                        colorStyle={colorStyle}
                        onClickAction={logout}
                        variant={"contained"}
                        classNameButton={classes.basicTypoButton}
                        startIcon={<MeetingRoomIcon/>}
                        size={"small"}
                        text={"LOGOUT"}
                    />
                </Grid>
            </Toolbar>
        </footer>
    )
}