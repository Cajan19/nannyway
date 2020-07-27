import {Button, Menu, MenuItem} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles(() => ({
    menuTextPrimary: {
        color: myTheme.palette.primary.dark,
    },
    menuTextSecondary: {
        color: myTheme.palette.secondary.dark,
    },
    buttonMenu: {
        display: "flex",
        justifyContent: "center",
    },
    backgroundColor: {
        backgroundColor: '#dfe2e7',
    },
    basicTypoButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
    },
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
            <Button color={colorStyle} className={classes.basicTypoButton} variant={"contained"} aria-controls="simple-menu" aria-haspopup="true"
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
                <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                    <Link to={"/"} className={activeTextClass()}>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                    <Link to={"/waitinglist"} className={activeTextClass()}>Warteliste</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                    <Link to={"/emergency"} className={activeTextClass()}>Notrufnummern</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                    <Link to={"/impr"} className={activeTextClass()}>Impressum</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}