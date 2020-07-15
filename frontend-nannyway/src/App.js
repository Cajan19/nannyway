import React from "react";
import UserContextProvider from "./context/user/UserContextProvider";
import Navigation from "./components/navigation/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChildInCareContextProvider from "./context/childInCare/ChildInCareContextProvider";


function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <ChildInCareContextProvider>
                    <CssBaseline>
                        <Navigation/>
                    </CssBaseline>
                </ChildInCareContextProvider>
            </UserContextProvider>
        </div>
    );
}

export default App;
