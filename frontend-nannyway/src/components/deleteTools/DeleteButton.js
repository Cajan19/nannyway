import Button from "@material-ui/core/Button";
import React from "react";

export default function DeleteButton({classDeleteButton, handleClickOpenAction, matchingIcon, buttonVariant, buttonSize, showItemToDelete}) {
    return (
        <Button
            variant={buttonVariant}
            className={classDeleteButton}
            onClick={handleClickOpenAction}
            startIcon={matchingIcon}
            size={buttonSize}
        >
            {showItemToDelete} löschen
        </Button>
    )
}