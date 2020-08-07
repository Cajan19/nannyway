import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import {UserDispatchContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {removeJWTToken} from "../../utils/jwt-utils";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#dfe2e7',
    },
    bottomStylePrimary: {
        fontFamily: "Open Sans",
        color: myTheme.palette.primary.dark,
        '&:hover': {
            color: myTheme.palette.primary.main,
        }
    },
    bottomStyleSecondary: {
        fontFamily: "Open Sans",
        color: myTheme.palette.secondary.dark,
        '&:hover': {
            color: myTheme.palette.secondary.main,
        }
    },
});

const stylesPrimary = {
    selected: {
        color: myTheme.palette.primary.dark,
    }
};

const stylesSecondary = {
    selected: {
        color: myTheme.palette.secondary.dark,
    }
};

export default function BottomNav({colorStyle}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function toTop() {
        document.documentElement.scrollTop = 0;
    }

    function toProfile() {
        window.location.assign("/profile")
    }

    const dispatch = useContext(UserDispatchContext);

    function logout() {
        dispatch({type: LOGOUT})
        removeJWTToken()
    }

    const activeColor = () => {
        if (colorStyle === "secondary") {
            return classes.bottomStyleSecondary;
        }
        return classes.bottomStylePrimary;
    }

    const activeStyle = () => {
        if (colorStyle === "secondary") {
            return stylesSecondary.selected;
        }
        return stylesPrimary.selected;
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction className={activeColor()} label="Profil" style={activeStyle()}
                                    icon={<AssignmentIndOutlinedIcon className={activeColor()}/>}
                                    onClick={toProfile}/>
            <BottomNavigationAction className={activeColor()} label="Kalender" style={activeStyle()}
                                    icon={<TodayOutlinedIcon className={activeColor()}/>}
                                    onClick={toTop}/>
            <BottomNavigationAction className={activeColor()} label="Bis bald" style={activeStyle()}
                                    icon={<MeetingRoomOutlinedIcon className={activeColor()}/>}
                                    onClick={logout}/>
        </BottomNavigation>
    );
}