import Button from "@material-ui/core/Button";
import React from "react";

export default function FooterButton({colorStyle, onClickAction, variant, classNameButton, startIcon, size, text}) {
    return (
        <Button
            onClick={onClickAction}
            color={colorStyle}
            variant={variant}
            className={classNameButton}
            startIcon={startIcon}
            size={size}
        >
            {text}
        </Button>
    )
}