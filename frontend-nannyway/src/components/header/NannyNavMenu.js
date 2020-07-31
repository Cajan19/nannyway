import {Menu, MenuItem} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import ListItemIcon from "@material-ui/core/ListItemIcon";


const useStyles = makeStyles(() => ({
    menuTextPrimary: {
        color: myTheme.palette.primary.dark,
    },
    menuTextSecondary: {
        color: myTheme.palette.secondary.dark,
    },
    menuIconColorPrimary: {
        color: myTheme.palette.primary.dark,
        '&:hover': {
            color: myTheme.palette.primary.main,
        }
    },
    menuIconColorSecondary: {
        color: myTheme.palette.secondary.dark,
        '&:hover': {
            color: myTheme.palette.secondary.main,
        }
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
        color: myTheme.palette.primary.contrastText,
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

    const activeIconColor = () => {
        if (colorStyle === "secondary") {
            return classes.menuIconColorSecondary
        }
        return classes.menuIconColorPrimary;
    }

    return (
        <div className={classes.buttonMenu}>
            <ListItemIcon onClick={handleClick} className={activeIconColor()} aria-haspopup={"true"}>
                <MenuOpenOutlinedIcon/>
            </ListItemIcon>
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
                    <Link to={"/profile"} className={activeTextClass()}>Nutzerprofil</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                    <Link to={"/impr"} className={activeTextClass()}>Impressum</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}