import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React from "react";


export default function DeleteDialog({openAction, handleDeleteAction, handleCloseAction, classBasicTypo, classConfirmAction, classDeleteButton, deleteContent}){
    return(
        <Dialog
            open={openAction}
            onClose={handleCloseAction}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classBasicTypo}
        >
            <DialogTitle id="alert-dialog-title"
                         className={classBasicTypo}>{"Daten wirklich löschen?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" className={classBasicTypo}>
                    Bist Du sicher, dass du {deleteContent} unwiderruflich löschen möchtest?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseAction} variant={"outlined"}
                        className={classConfirmAction}>
                    Zurück
                </Button>
                <Button onClick={handleDeleteAction} autoFocus variant={"outlined"}
                        className={classDeleteButton}>
                    löschen
                </Button>
            </DialogActions>
        </Dialog>
    )

}