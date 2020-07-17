import React from "react";
import Typography from "@material-ui/core/Typography";
import NannyAppBar from "../../header/NannyAppBar";
import Footer from "../../footer/Footer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    nannywaytypo: {
        fontFamily: "Finger Paint",
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/19678/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '72vh',
    },
}));

export default function WaitingList() {
    const classes = useStyles();

    return (
        <>
            <NannyAppBar colorStyle={"primary"}/>
            <main>
                <div className={classes.image}>
                    <Typography>
                        WaitingList
                    </Typography>
                </div>
            </main>
            <Footer colorStyle={"primary"}/>
        </>
    )
}

