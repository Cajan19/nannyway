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
import AddChildInCareForm from "../../components/addDataForm/AddChildInCareForm";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.secondary.main,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1518275491839-7039ff7be8fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '71vh',
    },
    error: {
        color: myTheme.palette.error.main,
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
        color: myTheme.palette.primary.dark,
        backgroundColor: myTheme.palette.secondary.main,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.light,
        }
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
                        <Typography variant={"h4"} className={classes.heading}>
                            TAGESKINDER
                        </Typography>
                    </Paper>
                    <Box m={4}>
                        {fetchStatus === "PENDING" && <ProgressSpinner/>}
                        {fetchStatus === "FAILED" && (
                            <Typography className={classes.error}>
                                Daten konnten nicht geladen werden
                            </Typography>
                        )}
                    </Box>
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            {kids.map((kid) => (
                                <ChildInCareAccordion key={kid.id} kid={kid} />
                            ))}
                        </Grid>
                        <Box m={5}>
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
                    </Grid>
                </div>
            </main>
            <Footer colorStyle={"primary"}/>
        </div>
    )
}