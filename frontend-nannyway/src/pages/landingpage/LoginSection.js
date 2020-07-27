import React, {useContext, useState} from "react";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {performLogin} from "../../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../../utils/jwt-utils";
import {Redirect, useLocation} from "react-router";
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
        fontFamily: "Open Sans",
    },
    buttons: {
        fontFamily: "Open Sans",
        backgroundColor: myTheme.palette.primary.dark,
        color: myTheme.palette.secondary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.info.light,
        },
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
    const location = useLocation();
    console.log(location);
    if (authStatus === 'SUCCESS') {
        const locationState = location.state || {from: {pathname: "/"}};
        return <Redirect to={locationState.from.pathname}/>
    }

    return (
        <Grid container
              direction="column"
              justify="space-around"
              alignItems="center" spacing={2}>
                <FormControl margin={"normal"}>
                        <TextField label="Benutzername" type="text" variant={"filled"}
                                   InputProps={{className: classes.textfieldFontColor}}
                                   value={username} className={classes.textfield} color={"secondary"}
                                   onChange={(event) => setUsername(event.target.value)}
                        />
                        <TextField label="Passwort" type="password" variant={"filled"} color={"secondary"}
                                   value={password} className={classes.textfield}
                                   InputProps={{className: classes.textfieldFontColor}}
                                   onChange={(event) => setPassword(event.target.value)}/>
                </FormControl>
                <Grid container justify={"center"} spacing={2}>
                    <Box m={1}>
                        <Button onClick={login} className={classes.buttons} variant={"outlined"}>Login</Button>
                    </Box>
                    <Box m={1}>
                        <Button onClick={login} className={classes.buttons} variant={"outlined"}>Sign up</Button>
                    </Box>
                </Grid>
        </Grid>
    )
}