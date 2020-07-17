import {Button, Menu, MenuItem} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
    menuTextPrimary: {
        color: myTheme.palette.primary.dark,
    },
    menuTextSecondary: {
        color: myTheme.palette.secondary.dark,
    },
    buttonMenu: {
        display: "flex",
        justifyContent: "center",
    }
}));

export default function NannyNavMenu({colorStyle}) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const activeTextClass = () => {
        if (colorStyle === "secondary") {
            return classes.menuTextSecondary
        }
        return classes.menuTextPrimary;
    }

    return (
        <div className={classes.buttonMenu}>
            <Button color={colorStyle} variant={"contained"} aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleClick}>
                Menü
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to={"/"} className={activeTextClass()}>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/waitinglist"} className={activeTextClass()}>Warteliste</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/emergency"} className={activeTextClass()}>Notfallnummern</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/test"} className={activeTextClass()}>Testseite</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}