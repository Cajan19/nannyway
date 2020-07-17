import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "../../context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../../utils/jwt-utils";
import {LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PrivateRoute from "../pages/contentPages/PrivateRoute";
import ChildInCareOverview from "../pages/contentPages/ChildInCareOverview";
import LandingPage from "../pages/landingpage/LandingPage";
import ChildInCareDetails from "../pages/contentPages/ChildInCareDetails";
import WaitingListDetails from "../pages/contentPages/WaitinglistDetails";
import WaitingList from "../pages/contentPages/WaitingList";
import EmergencyNumbers from "../pages/contentPages/EmergencyNumbers";
import TestPage from "../pages/contentPages/TestPage";

export default function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()})
        }
    }, [dispatch])

    return <BrowserRouter>
        <Switch>
            <PrivateRoute path="/waitinglist/:id" component={WaitingListDetails} exact/>
            <PrivateRoute path="/waitinglist" component={WaitingList} exact/>
            <PrivateRoute path="/emergency" component={EmergencyNumbers} exact/>
            <PrivateRoute path="/test" component={TestPage} exact/>
            <PrivateRoute path="/kids/:id" component={ChildInCareDetails} exact/>
            <PrivateRoute path="/" component={ChildInCareOverview} exact/>
            <Route path="/login" exact>
                <LandingPage/>
            </Route>
        </Switch>
    </BrowserRouter>;
}