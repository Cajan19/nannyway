import React, {useContext, useEffect} from "react";
import NannyAppBar from "../../header/NannyAppBar";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../../styling/muiTheme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "../../footer/Footer";
import {ChildInCareDispatchContext, ChildInCareStateContext} from "../../../context/childInCare/ChildInCareContext";
import {fetchKids} from "../../../context/childInCare/childInCareActions";
import ProgressSpinner from "../../spinner/ProgressSpinner";
import ChildInCareCard from "../../cards/ChildInCareCard";

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
    darkColor: {
        color: myTheme.palette.primary.dark,
    },
    error: {
        color: myTheme.palette.error.main,
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
    const {kids, fetchStatus} = useContext(ChildInCareStateContext);
    const dispatch = useContext(ChildInCareDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchKids(dispatch);
        }
    }, [fetchStatus, dispatch]);

    const classes = useStyles();

    return (
        <div>
            <NannyAppBar colorStyle={"primary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.nannywaytypo}>
                            Meine Tageskinder
                        </Typography>
                    </Paper>
                    {fetchStatus === "PENDING" && <ProgressSpinner/>}
                    {fetchStatus === "FAILED" && (
                        <Typography className={classes.error}>
                            Daten konnten nicht geladen werden
                        </Typography>
                    )}
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>
                                {kids.map((kid) => (
                                    <ChildInCareCard key={kid.firstName} kid={kid}/>
                                ))}
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
        </div>
    )
}