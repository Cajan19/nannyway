import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "../../context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../../utils/jwt-utils";
import {LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PrivateRoute from "../pages/contentPages/PrivateRoute";
import ChildInCareOverview from "../pages/contentPages/ChildInCareOverview";
import Container from "@material-ui/core/Container";
import Header from "../header/Header";
import LandingPage from "../pages/landingpage/LandingPage";


export default function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()})
        }
    }, [dispatch])

    return <BrowserRouter>
        <Header />
        <Container maxWidth={"md"} component={"main"}>
            <Switch>
                <PrivateRoute path="/" component={ChildInCareOverview} exact/>
                <Route path="/login" exact>
                    <LandingPage />
                </Route>
            </Switch>
        </Container>
    </BrowserRouter>;
}