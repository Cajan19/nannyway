import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {REGISTRATION, REGISTRATION_FAILED, REGISTRATION_SUCCESS} from "../../context/user/UserContextProvider";
import {registerNewUser} from "../../utils/auth-utils";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import ProgressSpinner from "../spinner/ProgressSpinner";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    basicFont: {
        fontFamily: "Open Sans",
    },
    alertError: {
        backgroundColor: myTheme.palette.error.main,
        color: myTheme.palette.primary.contrastText,
    },
    alertSuccess: {
        backgroundColor: myTheme.palette.primary.light,
        color: myTheme.palette.primary.contrastText,
    },
    addButton: {
        fontFamily: "Open Sans",
        color: myTheme.palette.primary.contrastText,
        backgroundColor: myTheme.palette.primary.main,
        '&:hover': {
            backgroundColor: myTheme.palette.primary.dark,
        }
    },
    abortButton: {
        fontFamily: "Open Sans",
        color: myTheme.palette.primary.contrastText,
        backgroundColor: myTheme.palette.secondary.main,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.dark,
        }
    },
}));

export default function UserRegistrationForm({open, handleClose}) {
    const classes = useStyles();

    const [registerInput, setRegisterInput] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    })

    const {registrationStatus} = useContext(UserStateContext);

    const dispatch = useContext(UserDispatchContext);

    const dataValidation = registerInput.username.length >= 6 && registerInput.password.length >= 8 && registerInput.firstName.length >= 2 &&
        registerInput.email.length > 4 && registerInput.lastName.length >= 2 && (registerInput.email.includes("@") && (registerInput.email.includes(".")));

    function handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        setRegisterInput({...registerInput, [field]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({type: REGISTRATION});
        registerNewUser(registerInput)
            .then(data => {
                dispatch({type: REGISTRATION_SUCCESS, payload: data});
            })
            .catch(() => {
                dispatch({type: REGISTRATION_FAILED});
            })
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'md'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title" className={classes.basicFont}>Registrierung</DialogTitle>
            <DialogContent>
                <DialogContentText className={classes.basicFont}>Erstelle Dein eigenes Nutzerkonto</DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Benutzername"
                        name="username"
                        onChange={handleChange}
                        required={true}
                        error={registerInput.username.length < 6}
                        helperText={'Mindestlänge: 6 Zeichen!'}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        type={"password"}
                        label="Passwort"
                        name="password"
                        onChange={handleChange}
                        required={true}
                        error={registerInput.password.length < 8}
                        helperText={'Mindestlänge: 8 Zeichen!'}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="E-Mail"
                        name="email"
                        type={"email"}
                        onChange={handleChange}
                        required={true}
                        error={registerInput.email.length < 2 && (!registerInput.email.includes("@") && !registerInput.email.includes("."))}
                        helperText={'Bitte gib eine gültige Mailadresse ein!'}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Vorname"
                        name="firstName"
                        onChange={handleChange}
                        required={true}
                        error={registerInput.firstName.length < 2}
                        helperText={'Pflichtfeld'}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Nachname"
                        name="lastName"
                        onChange={handleChange}
                        required={true}
                        error={registerInput.lastName.length < 2}
                        helperText={'Pflichtfeld'}
                    />
                </form>
                {registrationStatus === 'PENDING' && <ProgressSpinner/>}
                {registrationStatus === 'FAILED' && (
                    <Alert severity={"error"} variant={"filled"} className={classes.alertError}>
                        Dieser Benutzername ist bereits vergeben!
                    </Alert>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant={"contained"} className={classes.abortButton}>
                    Abbrechen
                </Button>
                <Button onClick={handleSubmit} variant={"contained"} className={classes.addButton}
                        disabled={!dataValidation}
                >
                    Registrieren
                </Button>
            </DialogActions>
            {registrationStatus === "SUCCESS" && <Alert
                variant="filled" severity="success" className={classes.alertSuccess}
            > Hurra! Dein Benutzerkonto wurde erstellt!
                <Grid container justify={"flex-end"} alignItems={"center"}>
                    <Box p={3}/>
                    <Button onClick={handleClose} className={classes.addButton}>Zurück</Button>
                </Grid>
            </Alert>}
        </Dialog>
    );
}