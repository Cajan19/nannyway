import React from "react";
import UserContextProvider from "./context/user/UserContextProvider";
import Navigation from "./components/navigation/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChildInCareContextProvider from "./context/childInCare/ChildInCareContextProvider";
import ChildOnWaitingListContextProvider from "./context/childOnWaitingList/ChildOnWaitingListContextProvider";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <ChildOnWaitingListContextProvider>
                    <ChildInCareContextProvider>
                        <CssBaseline>
                            <Navigation/>
                        </CssBaseline>
                    </ChildInCareContextProvider>
                </ChildOnWaitingListContextProvider>
            </UserContextProvider>
        </div>
    );
}

export default App;
