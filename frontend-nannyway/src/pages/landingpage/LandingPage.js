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
import Link from "@material-ui/core/Link";


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
        backgroundImage: 'url("https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '100vh',
    },
    basictypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.secondary.main,
    },
    nannyTypo: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.primary.dark,
    },
    caption: {
        marginRight: theme.spacing(2),
        fontFamily: "Open Sans",
        color: myTheme.palette.primary.main,
    },
    link: {
        marginRight: theme.spacing(2),
    }
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
                        <ListItem>
                            <Divider/>
                        </ListItem>
                        <Typography variant="h5" gutterBottom align={"center"} className={classes.nannyTypo}>
                            Kindertagespflege-App
                        </Typography>
                    </Container>
                </Grid>
                <Grid item>
                    <section className={classes.login}>
                        <Container maxWidth="xs">
                            <LoginSection/>
                        </Container>
                    </section>
                    <Grid item>
                        <Box m={8}/>
                    </Grid>
                    <ListItem>
                        <Divider/>
                    </ListItem>
                    <Grid item container xs={12} justify={"center"}>
                        <Typography variant="subtitle1" align={"center"} className={classes.basictypo}>
                            Datenerfassung | Organizer | Planungshilfe
                        </Typography>
                        <ListItem>
                            <Divider/>
                        </ListItem>
                        <Typography variant="subtitle1" align={"center"} className={classes.basictypo}>
                            Die digitale Datenverwaltung Deiner aktuellen und zukünftigen Tagespflegekids ist jetzt
                            kinderleicht.
                        </Typography>
                        <ListItem>
                            <Divider/>
                        </ListItem>
                        <Typography align={"center"} variant={"body2"} className={classes.basictypo}>
                            Inhalte sind nur für eingeloggte Nutzer sichtbar.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                >
                    <Box m={5}/>
                    <Typography align={"center"} variant={"caption"}>
                        <Link href="#" className={classes.link}>
                            Passwort vergessen?
                        </Link>
                    </Typography>
                    <Typography align={"center"} variant={"caption"} className={classes.caption}>
                        |
                    </Typography>
                    <Typography align={"center"} variant={"caption"}>
                        <Link href="/impr" className={classes.link}>
                            Impressum
                        </Link>
                    </Typography>
                </Grid>
            </div>
        </div>
    )
}