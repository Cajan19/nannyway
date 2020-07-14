import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginSection from "./LoginSection";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import myTheme from "../../../styling/muiTheme";


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
    nannywaytypo: {
        fontFamily: "Finger Paint",
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '100vh',
    },
    darkColor: {
        color: myTheme.palette.primary.dark,
    }
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.image}>
                <Grid item>
                    <Container className={classes.main} maxWidth="sm">
                        <Grid item container xs={12} justify={"center"}>
                            <img src={"images/nwLogo200px.png"} alt={"bunte Hand"}/>
                        </Grid>
                        <Typography variant="h5" gutterBottom align={"center"} className={classes.basictypo}>
                            Der digitale KTP-Planer!
                        </Typography>
                    </Container>
                </Grid>
                <Grid item>
                    <section className={classes.login}>
                        <Container maxWidth="xs">
                            <LoginSection/>
                        </Container>
                    </section>
                    <Grid item m={3}>
                    <Typography className={classes.basictypo} align={"center"}>
                        <Link href={"#"} className={classes.darkColor} underline={"always"}> Passwort vergessen?
                        </Link>
                    </Typography>
                    </Grid>
                  <Box m={3} />
                    <Typography variant="h6" align={"center"} className={classes.basictypo}>Weniger Papierkram - mehr
                        Zeit für Kids!</Typography>
                    <ListItem>
                        <Divider/>
                    </ListItem>
                    <Typography variant="subtitle1" align={"center"} className={classes.basictypo}>Die digitale
                        Datenverwaltung Deiner aktuellen und
                        zukünftigen Tagespflegegäste ist jetzt kinderleicht.</Typography>
                    <Typography align={"center"} variant={"body2"} className={classes.basictypo}>
                        Inhalte sind nur für eingeloggte Nutzer sichtbar.
                    </Typography>
                </Grid>
            </div>
        </div>
    )
}