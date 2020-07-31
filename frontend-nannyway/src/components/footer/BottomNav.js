import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
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

export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function toTop() {
        document.documentElement.scrollTop = 0;
    }

    const dispatch = useContext(UserDispatchContext);

    function logout() {
        dispatch({type: LOGOUT})
        removeJWTToken()
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
            <BottomNavigationAction className={classes.bottomStylePrimary} label="Nach Oben"
                                    icon={<ArrowUpwardOutlinedIcon className={classes.bottomStylePrimary}/>}
                                    onClick={toTop}/>
            <BottomNavigationAction className={classes.bottomStylePrimary} label="Planung"
                                    icon={<EventAvailableOutlinedIcon className={classes.bottomStylePrimary}/>}
                                    onClick={toTop}/>
            <BottomNavigationAction className={classes.bottomStylePrimary} label="Bis bald"
                                    icon={<MeetingRoomOutlinedIcon className={classes.bottomStylePrimary}/>}
                                    onClick={logout}/>
        </BottomNavigation>
    );
}