import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {UserDispatchContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {removeJWTToken} from "../../utils/jwt-utils";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    basicTypoButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
    },
}));

export default function LogoutButton({colorStyle}) {
    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext);

    function logout() {
        dispatch({type: LOGOUT})
        removeJWTToken()
    }

    return (
        <Button onClick={logout} color={colorStyle} variant={"contained"} size={"small"} className={classes.basicTypoButton}>
            Logout
        </Button>
    );
}