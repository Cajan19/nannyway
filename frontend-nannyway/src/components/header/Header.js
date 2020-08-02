import React, {useContext} from "react";
import {useLocation} from "react-router";
import {UserStateContext} from "../../context/user/UserContext";
import NannyAppBar from "./NannyAppBar";

export default function Header() {
    const location = useLocation();
    const {authStatus} = useContext(UserStateContext);

        if (authStatus !== 'SUCCESS') {
        return (
            <>
            </>
        )
    }
        switch (location.pathname) {
            case "/":
                return <NannyAppBar colorStyle={"primary"}/>
            case "/waitinglist":
                return <NannyAppBar colorStyle={"secondary"}/>
            case "/emergency":
                return <NannyAppBar colorStyle={"primary"}/>
            case "/profile":
                return <NannyAppBar colorStyle={"secondary"}/>
            case "/impr":
                return <NannyAppBar colorStyle={"primary"}/>
            default:
                return <NannyAppBar colorStyle={"primary"}/>
        }
}
