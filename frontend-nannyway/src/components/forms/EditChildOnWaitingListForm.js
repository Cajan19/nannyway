import React, {useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ProgressSpinner from "../spinner/ProgressSpinner";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Alert from "@material-ui/lab/Alert";
import {ChildOnWaitingListStateContext} from "../../context/childOnWaitingList/ChildOnWaitingListContext";

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

export default function EditChildOnWaitingListForm({
                                                open, handleClose, basicFontClass, displaySubtitle,
                                                fullWidthBoolean, labelText, handleSubmitAction, handleChangeAction,
                                                fieldType, shrinkBoolean, multilineBoolean,
                                            }) {
    const classes = useStyles();

    const {editStatus} = useContext(ChildOnWaitingListStateContext);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'md'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title" className={basicFontClass}>Daten bearbeiten:</DialogTitle>
            <DialogContent>
                <DialogContentText className={basicFontClass}>{displaySubtitle}</DialogContentText>
                <form onSubmit={handleSubmitAction}>
                    <TextField
                        className={basicFontClass}
                        fullWidth={fullWidthBoolean}
                        label={labelText}
                        onChange={handleChangeAction}
                        type={fieldType}
                        InputLabelProps={shrinkBoolean}
                        multiline={multilineBoolean}
                    />
                </form>
                {editStatus === 'PENDING' && <ProgressSpinner/>}
                {editStatus === 'FAILED' && (
                    <Alert severity={"error"} variant={"filled"} className={classes.alertError}>
                        Daten konnten nicht geändert werden!
                    </Alert>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant={"contained"} className={classes.abortButton}>
                    Abbrechen
                </Button>
                <Button onClick={handleSubmitAction} variant={"contained"} className={classes.addButton}>
                    Speichern
                </Button>
            </DialogActions>
        </Dialog>
    );
}