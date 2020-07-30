import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
    basicTypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.dark,
    },
}));

export default function PoisonQuestions() {
    const classes = useStyles();

    return (
        <CardContent>
            <Typography paragraph className={classes.basicTypo}>
                • WER ist betroffen?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WAS wurde eingenommen?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WIE wurde es eingenommen?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WANN wurde es eingenommen?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WIE GEHT es der betroffenen Person?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WIE VIEL wiegt die betroffene Person?
            </Typography>
            <Typography paragraph className={classes.basicTypo}>
                • WARTEN auf Rückfragen!
            </Typography>
        </CardContent>
    )
}