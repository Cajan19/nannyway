import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {UserDispatchContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";

export default function LogoutButton() {
    const dispatch = useContext(UserDispatchContext);

    function logout() {
        dispatch({type: LOGOUT})
    }

    return (
        <Button onClick={logout} color={"primary"} variant={"contained"} size={"small"}>
            Logout
        </Button>
    );
}