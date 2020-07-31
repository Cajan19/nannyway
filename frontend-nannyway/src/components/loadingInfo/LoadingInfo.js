import React from "react";
import Box from "@material-ui/core/Box";
import ProgressSpinner from "../spinner/ProgressSpinner";
import Typography from "@material-ui/core/Typography";

export default function LoadingInfo({errorClass, fetchStatus}) {

    return (
        <Box m={1}>
            {{fetchStatus} === "PENDING" && <ProgressSpinner/>}
            {{fetchStatus} === "FAILED" && (
                <Typography className={errorClass}>
                    Daten konnten nicht geladen werden
                </Typography>
            )}
        </Box>
    )
}