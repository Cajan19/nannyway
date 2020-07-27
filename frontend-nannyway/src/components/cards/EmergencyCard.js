import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import myTheme from "../../styling/muiTheme";
import CardTemplate from "./CardTemplate";
import EmergencyQuestions from "./EmergencyQuestions";


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginBottom: "20px",
        marginTop: "20px",
        backgroundColor: myTheme.palette.success.light,
    },
    avatarN: {
        backgroundColor: myTheme.palette.secondary.dark,
        fontFamily: "Open Sans",
    },
    basicTypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    heading: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: "large",
        color: myTheme.palette.info.dark,
    },
    paper: {
        backgroundColor: myTheme.palette.secondary.dark,
        padding: 5,
    }
}));

export default function EmergencyCard() {
    const classes = useStyles();

    return (
        <CardTemplate
            cardClassName={classes.root}
            avatarAriaLabel={"emergency"}
            avatarClassName={classes.avatarN}
            avatarLetter={"N"}
            classHeading={classes.heading}
            emergencyType={"Notruf"}
            typoClass={classes.basicTypo}
            paperClass={classes.paper}
            infoText={"Die Notrufzentrale hilft bei Unfällen, Bränden oder in akuten, eventuell lebensbedrohlichen Notfallsituationen. Auch dann, wenn die Situation unklar oder der Verletzungsstand nicht ersichtlich ist."}
            phoneLink={"tel: 112"}
            phoneText={"112 (bundesweit)"}
            cardContent={<EmergencyQuestions/>}
        />
    )
}