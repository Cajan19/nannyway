import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        dispatch({type: LOGIN})
        performLogin(username, password)
            .then(data => {
                setJWTToken(data);
                const userData = getDecodedJWTToken();
                dispatch({type: LOGIN_SUCCESS, payload: userData})
            }).catch(() => {
            dispatch({type: LOGIN_FAILED})
        })
    }

    return <div>
        <div>
            <TextField label="Username" type="text" value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
            <TextField label="Password" type="password" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <Button onClick={login}>Login</Button>
    </div>
}