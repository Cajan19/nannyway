import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import {
    ChildOnWaitingListDispatchContext,
    ChildOnWaitingListStateContext
} from "../../context/childOnWaitingList/ChildOnWaitingListContext";
import {addWaitingKid} from "../../context/childOnWaitingList/childOnWaitingListActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import ProgressSpinner from "../spinner/ProgressSpinner";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

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

export default function AddChildOnWaitingListForm({open, handleClose}) {
    const classes = useStyles();

    const [childOnWaitingListInput, setChildOnWaitingListInput] = useState({
        familyName: "",
        firstName: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        getToKnowDate: "",
        startDateOfCare: "",
        hoursInCarePerWeek: "",
        prediction: "",
        approval: false,
        infoText: "",
    });

    const {addStatus} = useContext(ChildOnWaitingListStateContext);

    useEffect(() => {
        if (addStatus === 'SUCCESS') {
            setChildOnWaitingListInput({
                familyName: "",
                firstName: "",
                birthDate: "",
                phoneNumber: "",
                email: "",
                getToKnowDate: "",
                startDateOfCare: "",
                hoursInCarePerWeek: "",
                prediction: "",
                approval: false,
                infoText: "",
            });
        }
    }, [addStatus]);

    const dispatch = useContext(ChildOnWaitingListDispatchContext);

    function handleSubmit() {
        addWaitingKid(dispatch, childOnWaitingListInput.familyName, childOnWaitingListInput.firstName, childOnWaitingListInput.birthDate,
            childOnWaitingListInput.phoneNumber, childOnWaitingListInput.email, childOnWaitingListInput.getToKnowDate, childOnWaitingListInput.startDateOfCare,
            childOnWaitingListInput.hoursInCarePerWeek, childOnWaitingListInput.prediction, childOnWaitingListInput.approval, childOnWaitingListInput.infoText)
            .then(handleClose);
    }

    function handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        setChildOnWaitingListInput({...childOnWaitingListInput, [field]: value});
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'md'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title" className={classes.basicFont}>Neuer Eintrag</DialogTitle>
            <DialogContent>
                <DialogContentText className={classes.basicFont}>Setze ein neues Kind auf die Warteliste</DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Familienname"
                        name="familyName"
                        value={childOnWaitingListInput.familyName}
                        onChange={handleChange}
                        error={childOnWaitingListInput.familyName.length < 2}
                        helperText={'Dieses Feld muss ausgefüllt werden'}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Vorname"
                        name="firstName"
                        value={childOnWaitingListInput.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Geburtsdatum"
                        name="birthDate"
                        value={childOnWaitingListInput.birthDate}
                        type={"date"}
                        onChange={handleChange}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        fullWidth={true}
                        label="Kontaktnummer"
                        name="phoneNumber"
                        value={childOnWaitingListInput.phoneNumber}
                        onChange={handleChange}
                        type={"tel"}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="E-Mail"
                        name="email"
                        value={childOnWaitingListInput.email}
                        onChange={handleChange}
                        type={"email"}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Kennelernen am"
                        name="getToKnowDate"
                        value={childOnWaitingListInput.getToKnowDate}
                        type={"date"}
                        onChange={handleChange}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Betreuung gewünscht ab"
                        name="startDateOfCare"
                        value={childOnWaitingListInput.startDateOfCare}
                        type={"date"}
                        onChange={handleChange}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Betreuungsstunden pro Woche"
                        name="hoursInCarePerWeek"
                        value={childOnWaitingListInput.hoursInCarePerWeek}
                        type={"number"}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Prognose"
                        name="prediction"
                        value={childOnWaitingListInput.prediction}
                        onChange={handleChange}
                        multiline={true}
                    />
                    <TextField
                        className={classes.basicFont}
                        fullWidth={true}
                        label="Freitext"
                        name="infoText"
                        value={childOnWaitingListInput.infoText}
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
                        disabled={childOnWaitingListInput.familyName.length < 2}>
                    Hinzufügen
                </Button>
            </DialogActions>
        </Dialog>
    );
}