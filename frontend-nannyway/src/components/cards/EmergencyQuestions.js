import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
    basicTypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
}));

export default function EmergencyQuestions() {
    const classes = useStyles();

    return (
        <CardContent>
            <Typography paragraph className={classes.basicTypo}>
                • WO ist das Ereignis?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WER ruft an?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WAS ist geschehen?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WIE VIELE Betroffene?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WARTEN auf Rückfragen!
            </Typography>
        </CardContent>
    )
}