import {Button, Menu, MenuItem} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
    darkColor: {
        color: myTheme.palette.primary.dark,
    },
    buttonMenu: {
        display: "flex",
        justifyContent: "center",
    }
}));

export default function NavMenu() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.buttonMenu}>
            <Button color={"primary"} variant={"contained"} aria-controls="simple-menu" aria-haspopup="true"
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
                    <Link to={"/"} className={classes.darkColor}>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/waitinglist"} className={classes.darkColor}>Warteliste</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}