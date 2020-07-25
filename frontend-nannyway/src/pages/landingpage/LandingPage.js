import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginSection from "./LoginSection";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    login: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
    image: {
        backgroundImage: 'url("images/tealbg-orig-l.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '100vh',
    },
    paperText: {
        backgroundColor: myTheme.palette.primary.dark,
        padding: 3,
        color: myTheme.palette.secondary.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.image}>
                <Grid item>
                    <Container className={classes.main} maxWidth="sm">
                        <Grid container justify={"center"}>
                            <img src={"images/nwlogo6-200.png"} alt={"bunte Hand"}/>
                        </Grid>
                        <Typography variant="h5" gutterBottom align={"center"} className={classes.basictypo}>
                            Der digitale KTP-Planer!
                        </Typography>
                    </Container>
                </Grid>
                <Grid item container xs={12} justify={"center"}>
                    <Typography variant="h6" align={"center"} className={classes.basictypo}>
                        Tschüss Papierkram - hallo Kids ;)
                    </Typography>
                </Grid>
                <Grid item>
                    <section className={classes.login}>
                        <Container maxWidth="xs">
                            <LoginSection/>
                        </Container>
                    </section>
                    <Grid item>
                        <Box m={12}/>
                    </Grid>
                    <ListItem>
                        <Divider/>
                    </ListItem>
                    <Grid item container xs={12} justify={"center"}>
                        <Paper className={classes.paperText}>
                            <Typography variant="subtitle1" align={"center"} className={classes.basictypo}>Die digitale
                                Datenverwaltung Deiner aktuellen und
                                zukünftigen Tagespflegegäste ist jetzt kinderleicht.</Typography>
                            <Typography align={"center"} variant={"body2"} className={classes.basictypo}>
                                Inhalte sind nur für eingeloggte Nutzer sichtbar.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}