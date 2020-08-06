import React, {useContext} from "react";
import {useLocation} from "react-router";
import {UserStateContext} from "../../context/user/UserContext";
import BottomNav from "./BottomNav";

export default function Footer() {
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
            return <BottomNav colorStyle={"primary"}/>
        case "/waitinglist":
            return <BottomNav colorStyle={"secondary"}/>
        case "/emergency":
            return <BottomNav colorStyle={"primary"}/>
        case "/profile":
            return <BottomNav colorStyle={"secondary"}/>
        case "/impr":
            return <BottomNav colorStyle={"primary"}/>
        default:
            return <BottomNav colorStyle={"primary"}/>
    }
}
