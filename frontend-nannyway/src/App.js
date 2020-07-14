import React from "react";
import UserContextProvider from "./context/user/UserContextProvider";
import Navigation from "./components/navigation/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <CssBaseline>
                <Navigation/>
                </CssBaseline>
            </UserContextProvider>
        </div>
    );
}

export default App;
