import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {UserDispatchContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {removeJWTToken} from "../../utils/jwt-utils";

export default function LogoutButton({colorStyle}) {

    const dispatch = useContext(UserDispatchContext);

    function logout() {
        dispatch({type: LOGOUT})
        removeJWTToken()
    }

    return (
        <Button onClick={logout} color={colorStyle} variant={"contained"} size={"small"}>
            Logout
        </Button>
    );
}