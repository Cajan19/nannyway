import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "./context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PrivateRoute from "./pages/PrivateRoute";
import ChildInCareOverview from "./pages/ChildInCareOverview";
import LoginPage from "./pages/LoginPage";
import UserContextProvider, {LOGIN_SUCCESS} from "./context/user/UserContextProvider";
import ProminentAppBar from "./components/ProminentAppBar";


function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()})
        }
    }, [dispatch])

    return <BrowserRouter>
        <ProminentAppBar />
        <Switch>
            <PrivateRoute path="/" component={ChildInCareOverview} exact/>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
        </Switch>
    </BrowserRouter>;
}

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <Navigation/>
            </UserContextProvider>
        </div>
    );
}

export default App;
