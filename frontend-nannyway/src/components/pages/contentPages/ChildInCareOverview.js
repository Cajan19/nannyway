import React from "react";
import ProminentAppBar from "../../header/ProminentAppBar";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../../styling/muiTheme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "../../footer/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '70vh',
    },
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
    darkColor: {
        color: myTheme.palette.primary.dark,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.primary.light,

    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.primary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
}));

export default function ChildInCareOverview() {
    const classes = useStyles();

    return (
        <div>
            <ProminentAppBar/>
            <main className={classes.root}>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"}>
                            Meine Tageskinder
                        </Typography>
                    </Paper>
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>placeholder card</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>placeholder mini card</Paper>
                        </Grid>
                    </Grid>
                </div>
            </main>
            <Footer/>
        </div>
    )

}