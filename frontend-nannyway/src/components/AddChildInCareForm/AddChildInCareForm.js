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


export default function AddChildInCareForm({open, handleClose}) {
    const [childInCareInput, setChildInCareInput] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
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
            });
            handleClose();
        }
    }, [addStatus, handleClose]);

    const dispatch = useContext(ChildInCareDispatchContext);

    function handleSubmit() {
        addKid(dispatch, childInCareInput.firstName, childInCareInput.lastName, childInCareInput.birthDate, childInCareInput.infoText, childInCareInput.pickUpPerson)
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
            <DialogTitle id="form-dialog-title">Kind hinzufügen</DialogTitle>
            <DialogContent>
                <DialogContentText>Trage ein neues Tageskind ein</DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth={true}
                        label="Vorname"
                        name={"firstName"}
                        value={childInCareInput.firstName}
                        onChange={handleChange}
                        error={childInCareInput.firstName.length < 1}
                        helperText={'Dieses Feld muss ausgefüllt werden'}
                    />
                    <TextField
                        fullWidth={true}
                        label="Nachname"
                        name={"lastName"}
                        value={childInCareInput.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth={true}
                        label="Geburtsdatum"
                        name={"birthDate"}
                        value={childInCareInput.birthDate}
                        onChange={handleChange}
                        type="date"
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        fullWidth={true}
                        label="autorisierte Abholperson"
                        name={"pickUpPerson"}
                        value={childInCareInput.pickUpPerson}
                        onChange={handleChange}
                    /> <TextField
                    fullWidth={true}
                    label="freier Infotext"
                    name={"infoText"}
                    value={childInCareInput.infoText}
                    onChange={handleChange}
                    multiline={true}
                />
                </form>
                {addStatus === 'PENDING' && <ProgressSpinner/>}
                {addStatus === 'FAILED' && (
                    <Typography variant="body1" component="p" color={"error"}>
                        konnte nicht hinzugefügt werden
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant={"contained"}>
                    Abbrechen
                </Button>
                <Button onClick={handleSubmit} color="primary" variant={"contained"}>
                    Hinzufügen
                </Button>
            </DialogActions>
        </Dialog>
    );
}