import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/footer/Footer";
import NannyAppBar from "../../components/header/NannyAppBar";
import EmergencyCard from "../../components/cards/EmergencyCard";
import PoliceCard from "../../components/cards/PoliceCard";
import PoisonCard from "../../components/cards/PoisonCard";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.primary.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1530036067142-31e9b88da9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '72vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.info.light,
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
            <NannyAppBar colorStyle={"secondary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.heading}>
                            NOTRUFNUMMERN
                        </Typography>
                    </Paper>
                    <Grid container spacing={3}
                          direction="column"
                          justify="space-around"
                          alignItems="center">
                        <EmergencyCard/>
                        <PoliceCard/>
                        <PoisonCard/>
                    </Grid>
                </div>
            </main>
            <Footer colorStyle={"secondary"}/>
        </div>
    )
}