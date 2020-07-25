import React, {useContext, useEffect, useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ChildInCareDispatchContext, ChildInCareStateContext} from "../../context/childInCare/ChildInCareContext";
import {addKid} from "../../context/childInCare/childInCareActions";
import ProgressSpinner from "../spinner/ProgressSpinner";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles(() => ({
    addError: {
        fontFamily: "Open Sans",
        color: myTheme.palette.error.main,
        fontVariant: "small-caps",
    },
    basicFont: {
        fontFamily: "Open Sans",
    },
}));

export default function AddChildInCareForm({open, handleClose}) {
    const classes = useStyles();

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
            childInCareInput.nameParents, childInCareInput.email)
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
                    <Typography component="p" className={classes.addError}>
                        Daten konnten nicht hinzugefügt werden
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant={"contained"} className={classes.basicFont}>
                    Abbrechen
                </Button>
                <Button onClick={handleSubmit} color="primary" variant={"contained"} className={classes.basicFont}
                        disabled={childInCareInput.firstName.length < 2}>
                    Hinzufügen
                </Button>
            </DialogActions>
        </Dialog>
    );
}