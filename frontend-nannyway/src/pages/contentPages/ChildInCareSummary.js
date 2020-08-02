import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {ChildInCareDispatchContext, ChildInCareStateContext} from "../../context/childInCare/ChildInCareContext";
import {fetchKids} from "../../context/childInCare/childInCareActions";
import ChildInCareAccordion from "../../components/accordion/ChildInCareAccordion";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddChildInCareForm from "../../components/addDataForm/AddChildInCareForm";
import LoadingInfo from "../../components/loadingInfo/LoadingInfo";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.info.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '80vh',
    },
    error: {
        color: myTheme.palette.error.main,
    },
    paperTop: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: myTheme.palette.primary.main,
        fontFamily: "Open Sans",
    },
    button: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.info.dark,
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
        <main>
            <div className={classes.image}>
                <Paper className={classes.paperTop} square={true} elevation={0}>
                    <Typography variant={"h4"} className={classes.heading}>
                        TAGESKINDER
                    </Typography>
                </Paper>
                <LoadingInfo errorClass={classes.error} fetchStatus={fetchStatus}/>
                <Grid container spacing={3}
                      direction="row"
                      justify="space-around"
                      alignItems="center">
                    <Grid item xs={11}>
                        {kids.map((kid) => (
                            <ChildInCareAccordion key={kid.id} kid={kid}/>
                        ))}
                    </Grid>
                    <Box m={2}>
                        <Button
                            size={"small"}
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
    )
}