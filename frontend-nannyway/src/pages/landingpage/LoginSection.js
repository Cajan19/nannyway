import React, {useContext, useState} from "react";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {performLogin} from "../../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../../utils/jwt-utils";
import {Redirect} from "react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
    textfield: {
        paddingTop: theme.spacing(1),
        fontFamily: "Open Sans",
    },
    textfieldFontColor: {
        color: myTheme.palette.secondary.dark,
    }
}));

export default function LoginSection() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext);

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

    const {authStatus} = useContext(UserStateContext);
    if (authStatus === 'SUCCESS') {
        return <Redirect to={"/"}/>
    }

    return (
        <Grid container justify={"space-around"} alignItems={"center"} spacing={2}>
            <Grid item>
                    <FormControl margin={"normal"} >
                        <TextField label="Benutzername" type="text" variant={"filled"} InputProps={{className: classes.textfieldFontColor}}
                                   value={username} className={classes.textfield} color={"secondary"}
                                   onChange={(event) => setUsername(event.target.value)}/>
                        <TextField label="Passwort" type="password" variant={"filled"} color={"secondary"}
                                   value={password} className={classes.textfield} InputProps={{className: classes.textfieldFontColor}}
                                   onChange={(event) => setPassword(event.target.value)}/>
                    </FormControl>
                <Box m={1}>
                    <Button fullWidth onClick={login}>Login</Button>
                </Box>
                <Box m={1}>
                    <Button fullWidth onClick={login} >Registrierung</Button>
                </Box>
            </Grid>
        </Grid>
    )
}