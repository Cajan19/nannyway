import React, {useContext, useEffect, useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {ChildInCareDispatchContext, ChildInCareStateContext} from "../../context/childInCare/ChildInCareContext";
import {addKid} from "../../context/childInCare/childInCareActions";
import ProgressSpinner from "../spinner/ProgressSpinner";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Alert from "@material-ui/lab/Alert";
import {UserStateContext} from "../../context/user/UserContext";

const useStyles = makeStyles(() => ({
    basicFont: {
        fontFamily: "Open Sans",
    },
    alertError: {
        backgroundColor: myTheme.palette.error.main,
        color: myTheme.palette.primary.contrastText,
        fontFamily: "Open Sans",
        fontVariant: "small-caps",
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

export default function AddChildInCareForm({open, handleClose}) {
    const classes = useStyles();

    const {userData} = useContext(UserStateContext);

    const [childInCareInput, setChildInCareInput] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        infoText: "",
        pickUpPerson: "",
        hoursInCarePerWeek: "",
        contractTerm: "",
        phoneNumber: "",
        nameParents: "",
        email: "",
        nanny: userData.username,
    });

    const {addStatus} = useContext(ChildInCareStateContext);

    useEffect(() => {
        if (addStatus === 'SUCCESS') {
            setChildInCareInput({
                firstName: "",
                lastName: "",
                birthDate: "",
                infoText: "",
                pickUpPerson: "",
                hoursInCarePerWeek: "",
                contractTerm: "",
                phoneNumber: "",
                nameParents: "",
                email: "",
            });
        }
    }, [addStatus]);

    const dispatch = useContext(ChildInCareDispatchContext);

    function handleSubmit() {
        addKid(dispatch, childInCareInput.firstName, childInCareInput.lastName, childInCareInput.birthDate, childInCareInput.infoText, childInCareInput.pickUpPerson,
            childInCareInput.hoursInCarePerWeek, childInCareInput.contractTerm, childInCareInput.phoneNumber,
            childInCareInput.nameParents, childInCareInput.email, childInCareInput.nanny)
            .then(handleClose);
    }

    function handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        setChildInCareInput({...childInCareInput, [field]: value});
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'md'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title" className={classes.basicFont}>Kind hinzufügen</DialogTitle>
            <DialogContent>
                <DialogContentText className={classes.basicFont}>Trage ein neues Tageskind ein</DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Vorname"
                        name="firstName"
                        value={childInCareInput.firstName}
                        onChange={handleChange}
                        error={childInCareInput.firstName.length < 2}
                        helperText={'Dieses Feld muss ausgefüllt werden'}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Nachname"
                        name="lastName"
                        value={childInCareInput.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Geburtsdatum"
                        name="birthDate"
                        value={childInCareInput.birthDate}
                        onChange={handleChange}
                        type="date"
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Kontaktnummer"
                        name="phoneNumber"
                        value={childInCareInput.phoneNumber}
                        onChange={handleChange}
                        type="tel"
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Eltern"
                        name="nameParents"
                        value={childInCareInput.nameParents}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="E-Mail"
                        name="email"
                        value={childInCareInput.email}
                        onChange={handleChange}
                        type="email"
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Betreuungsstunden pro Woche"
                        name="hoursInCarePerWeek"
                        value={childInCareInput.hoursInCarePerWeek}
                        onChange={handleChange}
                        type="number"
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Vertragslaufzeit bis"
                        name="contractTerm"
                        value={childInCareInput.contractTerm}
                        onChange={handleChange}
                        type="date"
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="autorisierte Abholperson"
                        name="pickUpPerson"
                        value={childInCareInput.pickUpPerson}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Freitext"
                        name="infoText"
                        value={childInCareInput.infoText}
                        onChange={handleChange}
                        multiline={true}
                    />
                </form>
                {addStatus === 'PENDING' && <ProgressSpinner/>}
                {addStatus === 'FAILED' && (
                    <Alert severity={"error"} variant={"filled"} className={classes.alertError}>
                        Daten konnten nicht hinzugefügt werden!
                    </Alert>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant={"contained"} className={classes.abortButton}>
                    Abbrechen
                </Button>
                <Button onClick={handleSubmit} variant={"contained"} className={classes.addButton}
                        disabled={childInCareInput.firstName.length < 2}>
                    Hinzufügen
                </Button>
            </DialogActions>
        </Dialog>
    );
}