import React, {useContext, useEffect} from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import UserContextProvider, {LOGIN_SUCCESS} from "./context/UserContextProvider";
import Route from "react-router-dom/es/Route";
import Switch from "@material-ui/core/Switch";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import {UserDispatchContext} from "./context/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";

function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if(isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()})
        }
    }, [dispatch])

    return <BrowserRouter>
        <Switch>
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
