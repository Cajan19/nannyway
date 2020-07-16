import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../../footer/Footer";
import AppBarSecondaryColor from "../../header/AppBarSecondaryColor";

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    },
    nannywaytypo: {
        fontFamily: "Finger Paint",
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/1272837/pexels-photo-1272837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '72vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.secondary.light,
    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.secondary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
}));

export default function EmergencyNumbers() {
    const classes = useStyles();

    return (
        <div>
            <AppBarSecondaryColor/>
            <main className={classes.root}>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.nannywaytypo}>
                            Notrufnummern
                        </Typography>
                    </Paper>
                    )}
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.basictypo}>
                                    placeholder card
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.basictypo}>
                                    placeholder mini card
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </main>
            <Footer/>
        </div>
    )
}