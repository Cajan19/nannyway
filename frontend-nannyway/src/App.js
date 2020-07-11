import React from "react";
import UserContextProvider from "./context/user/UserContextProvider";
import Navigation from "./components/navigation/Navigation";


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
