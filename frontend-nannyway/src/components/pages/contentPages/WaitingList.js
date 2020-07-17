import React from "react";
import Typography from "@material-ui/core/Typography";
import NannyAppBar from "../../header/NannyAppBar";
import Footer from "../../footer/Footer";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myTheme from "../../../styling/muiTheme";

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

export default function WaitingList() {
    const classes = useStyles();

    return (
        <>
            <NannyAppBar colorStyle={"primary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.nannywaytypo}>
                            WARTELISTE
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
            <Footer colorStyle={"primary"}/>
        </>
    )
}

