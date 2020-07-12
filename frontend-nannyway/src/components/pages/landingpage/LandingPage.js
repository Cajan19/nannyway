import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import LoginSection from "./LoginSection";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";


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
        backgroundColor: "rgba(0,210,255,0.7)"
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '100vh',
        minWidth: '70vw',
        marginTop: "20px",
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.image}>
                <CssBaseline/>
                <Grid item>
                    <Container className={classes.main} maxWidth="sm">
                        <Typography variant="h3" gutterBottom align={"center"}>
                            Hier soll das Logo und so
                        </Typography>
                    </Container>
                </Grid>
                <Grid item>
                    <section className={classes.login}>
                        <Container maxWidth="md">
                            <LoginSection/>
                            <Typography variant="body1" align={"center"}>Du musst eingeloggt sein, um die Inhalte nutzen
                                zu können.</Typography>
                        </Container>
                    </section>
                    <ListItem>
                        <Divider/>
                    </ListItem>
                    <Typography variant="h6" align={"center"}>Weniger Papierkram - mehr Zeit für Spaß!</Typography>
                    <ListItem>
                        <Divider/>
                    </ListItem>
                    <Typography variant="body2" align={"center"}>Die digitale Datenverwaltung Deiner aktuellen und
                        zukünftigen Tageskids ist jetzt kinderleicht.</Typography>
                </Grid>
            </div>
        </div>

    )
}