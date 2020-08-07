import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "../../context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../../utils/jwt-utils";
import {LOGIN_FAILED, LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PrivateRoute from "../../pages/contentPages/PrivateRoute";
import LandingPage from "../../pages/landingpage/LandingPage";
import WaitingList from "../../pages/contentPages/WaitingList";
import EmergencyNumbers from "../../pages/contentPages/EmergencyNumbers";
import ChildInCareSummary from "../../pages/contentPages/ChildInCareSummary";
import Imprint from "../../pages/imprint/Imprint";
import UserProfile from "../../pages/contentPages/UserProfile";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    container: {
        minHeight: "80vh",
        overflowY: "scroll"
    }
}));

export default function Navigation() {
    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()})
        } else {
            dispatch({type: LOGIN_FAILED})
        }
    }, [dispatch])

    return <BrowserRouter>
        <Header/>
        <Box className={classes.container}>
            <Switch>
                <PrivateRoute path="/waitinglist" component={WaitingList}/>
                <PrivateRoute path="/emergency" component={EmergencyNumbers}/>
                <PrivateRoute path="/profile" component={UserProfile} exact/>
                <PrivateRoute path="/" component={ChildInCareSummary} exact/>
                <Route path="/impr" exact>
                    <Imprint/>
                </Route>
                <Route path="/login" exact>
                    <LandingPage/>
                </Route>
            </Switch>
        </Box>
        <Footer/>
    </BrowserRouter>;
}