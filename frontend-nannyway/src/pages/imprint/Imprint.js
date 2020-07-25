import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import NannyAppBar from "../../components/header/NannyAppBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FooterImprint from "../../components/footer/FooterImprint";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.primary.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    image: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1530036067142-31e9b88da9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "right",
        minHeight: '72vh',
    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.secondary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.secondary.light,
        marginBottom: 10,
    },
}));

export default function Imprint() {
    const classes = useStyles();

    return (
        <div>
            <NannyAppBar colorStyle={"secondary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.heading}>
                            Impressum
                        </Typography>
                    </Paper>
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.basictypo}>
                                    Dinge und Sachen!!!
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </main>
            <FooterImprint colorStyle={"secondary"}/>
        </div>
)
}