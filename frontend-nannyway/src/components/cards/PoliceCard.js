import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import myTheme from "../../styling/muiTheme";
import EmergencyQuestions from "./EmergencyQuestions";
import CardTemplate from "./CardTemplate";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginBottom: "20px",
        marginTop: "20px",
        backgroundColor: myTheme.palette.success.light,
    },
    avatarP: {
        backgroundColor: myTheme.palette.primary.dark,
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
    },
}));

export default function PoliceCard() {
    const classes = useStyles();

    return (
        <CardTemplate
            cardClassName={classes.root}
            avatarAriaLabel={"police"}
            avatarClassName={classes.avatarP}
            avatarLetter={"P"}
            classHeading={classes.heading}
            emergencyType={"Polizei"}
            typoClass={classes.basicTypo}
            paperClass={classes.paper}
            infoText={"Der Notruf der Polizei sollte immer dann gerufen werden, wenn man sich bedroht fühlt, in einer gefährlichen Situation befindet oder sich eine Notsituation anbahnt."}
            phoneLink={"tel: 110"}
            phoneText={"110 (bundesweit)"}
            cardContent={<EmergencyQuestions/>}
        />
    );
}