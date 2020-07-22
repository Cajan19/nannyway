import Button from "@material-ui/core/Button";
import React from "react";

export default function DeleteKidButton({classDeleteButton, handleClickOpenAction, matchingIcon, buttonVariant, showItemToDelete}){
    return (
        <Button
            variant={buttonVariant}
            className={classDeleteButton}
            onClick={handleClickOpenAction}
            startIcon={matchingIcon}
        >
            {showItemToDelete} löschen
        </Button>
    )
}