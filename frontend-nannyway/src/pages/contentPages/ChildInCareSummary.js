import React, {useContext, useEffect, useState} from "react";
import NannyAppBar from "../../components/header/NannyAppBar";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "../../components/footer/Footer";
import {ChildInCareDispatchContext, ChildInCareStateContext} from "../../context/childInCare/ChildInCareContext";
import {fetchKids} from "../../context/childInCare/childInCareActions";
import ProgressSpinner from "../../components/spinner/ProgressSpinner";
import ChildInCareAccordion from "../../components/accordion/ChildInCareAccordion";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddChildInCareForm from "../../components/addChildInCareForm/AddChildInCareForm";

const useStyles = makeStyles((theme) => ({
    nannywaytypo: {
        fontFamily: "Finger Paint",
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/3661246/pexels-photo-3661246.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
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
    button: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        backgroundColor: myTheme.palette.secondary.main,
    },
}));

export default function ChildInCareSummary() {
    const [showAddForm, setShowAddForm] = useState(false);

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
                            TAGESKINDER
                        </Typography>
                    </Paper>
                    {fetchStatus === "PENDING" && <ProgressSpinner/>}
                    {fetchStatus === "FAILED" && (
                        <Typography className={classes.error}>
                            Daten konnten nicht geladen werden
                        </Typography>
                    )}
                    <Box m={2}>
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => setShowAddForm(true)}
                            startIcon={<AddIcon/>}
                        >
                            Kind hinzufügen
                        </Button>
                        <AddChildInCareForm
                            open={showAddForm}
                            handleClose={() => setShowAddForm(false)}
                        />
                    </Box>
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            {kids.map((kid) => (
                                <ChildInCareAccordion key={kid.id} kid={kid}/>
                            ))}
                        </Grid>
                        {/*<Grid item xs={6} sm={3}>*/}
                        {/*    <Paper className={classes.paper}>*/}
                        {/*        <Typography className={classes.basictypo}>*/}
                        {/*            placeholder mini card*/}
                        {/*        </Typography>*/}
                        {/*    </Paper>*/}
                        {/*</Grid>*/}
                    </Grid>
                </div>
            </main>
            <Footer colorStyle={"primary"}/>
        </div>
    )
}