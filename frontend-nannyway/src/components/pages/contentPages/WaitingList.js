import React from "react";
import Typography from "@material-ui/core/Typography";
import NannyAppBar from "../../header/NannyAppBar";
import Footer from "../../footer/Footer";

export default function WaitingList() {
    return (
        <>
            <NannyAppBar colorStyle={"primary"}/>
            <Typography>
                WaitingList
            </Typography>
            <Footer colorStyle={"primary"}/>
        </>
    )
}