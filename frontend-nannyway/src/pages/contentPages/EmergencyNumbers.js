import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/footer/Footer";
import NannyAppBar from "../../components/header/NannyAppBar";
import EmergencyCard from "../../components/emergencyInfoCards/EmergencyCard";
import PoliceCard from "../../components/emergencyInfoCards/PoliceCard";
import PoisonCard from "../../components/emergencyInfoCards/PoisonCard";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.info.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '78vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.info.light,
    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.primary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
}));

export default function EmergencyNumbers() {
    const classes = useStyles();

    return (
        <div>
            <NannyAppBar colorStyle={"primary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop} square={true} elevation={0}>
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
            <Footer colorStyle={"primary"}/>
        </div>
    )
}