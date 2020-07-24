import React, {useContext, useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import NannyAppBar from "../../components/header/NannyAppBar";
import Footer from "../../components/footer/Footer";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myTheme from "../../styling/muiTheme";
import Box from "@material-ui/core/Box";
import ProgressSpinner from "../../components/spinner/ProgressSpinner";
import {
    ChildOnWaitingListDispatchContext,
    ChildOnWaitingListStateContext
} from "../../context/childOnWaitingList/ChildOnWaitingListContext";
import {fetchWaitingKids} from "../../context/childOnWaitingList/childOnWaitingListActions";
import ChildOnWaitingListAccordion from "../../components/accordion/ChildOnWaitingListAccordion";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AddChildOnWaitingListForm from "../../components/addDataForm/addChildOnWaitingListForm";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.primary.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/268819/pexels-photo-268819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        // backgroundImage: 'url(https://images.pexels.com/photos/19678/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '72vh',
    },
    error: {
        color: myTheme.palette.error.main,
    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.secondary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
    button: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.secondary.light,
        backgroundColor: myTheme.palette.primary.dark,
        '&:hover': {
            backgroundColor: myTheme.palette.primary.main,
        }
    },

}));

export default function WaitingList() {
    const classes = useStyles();

    const [showAddForm, setShowAddForm] = useState(false);

    const {waitingKids, fetchStatus} = useContext(ChildOnWaitingListStateContext);
    const dispatch = useContext(ChildOnWaitingListDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchWaitingKids(dispatch);
        }
    }, [fetchStatus, dispatch]);

    return (
        <div>
            <NannyAppBar colorStyle={"secondary"}/>
            <main>
                <div className={classes.image} >
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.heading}>
                            WARTELISTE
                        </Typography>
                    </Paper>
                    <Box m={4}>
                        {fetchStatus === "PENDING" && <ProgressSpinner/>}
                        {fetchStatus === "FAILED" && (
                            <Typography className={classes.error}>
                                Daten konnten nicht geladen werden
                            </Typography>)}
                    </Box>
                    <Grid container spacing={3}
                          direction="row"
                          justify="space-around"
                          alignItems="center">
                        <Grid item xs={10}>
                            {waitingKids.map((waitingKid)=>(
                                <ChildOnWaitingListAccordion key={waitingKid.id} waitingKid={waitingKid} />
                            ))}
                        </Grid>
                        <Box m={5}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={() => setShowAddForm(true)}
                                startIcon={<AddIcon/>}
                            >
                                neue Warteliste
                            </Button>
                            <AddChildOnWaitingListForm
                                open={showAddForm}
                                handleClose={() => setShowAddForm(false)}
                            />
                        </Box>
                    </Grid>
                </div>
            </main>
            <Footer colorStyle={"secondary"}/>
        </div>
    )
}

