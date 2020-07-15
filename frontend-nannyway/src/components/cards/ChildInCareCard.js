import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles({
    root: {
        backgroundColor: myTheme.palette.primary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.light,
        },
    },
});

export default function ChildInCareCard({kid}) {

    const classes = useStyles();

    return (
        <Grid item>
            <Card className={classes.root}>
                <CardContent>
                    <Typography>
                        {kid.firstName}
                        {kid.lastName}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )

}