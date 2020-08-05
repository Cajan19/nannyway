import React, {useContext, useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myTheme from "../../styling/muiTheme";
import Box from "@material-ui/core/Box";
import {
    ChildOnWaitingListDispatchContext,
    ChildOnWaitingListStateContext
} from "../../context/childOnWaitingList/ChildOnWaitingListContext";
import {fetchWaitingKids} from "../../context/childOnWaitingList/childOnWaitingListActions";
import ChildOnWaitingListAccordion from "../../components/overview/ChildOnWaitingListAccordion";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AddChildOnWaitingListForm from "../../components/forms/addChildOnWaitingListForm";
import LoadingInfo from "../../components/loadingInfo/LoadingInfo";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.secondary.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    image: {
        backgroundImage: 'url("https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
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
        backgroundColor: myTheme.palette.secondary.main,
        fontFamily: "Open Sans",
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
        <main>
            <div className={classes.image}>
                <Paper className={classes.paperTop} square={true} elevation={0}>
                    <Typography variant={"h4"} className={classes.heading}>
                        WARTELISTE
                    </Typography>
                </Paper>
                <LoadingInfo errorClass={classes.error} fetchStatus={fetchStatus}/>
                <Grid container spacing={3}
                      direction="row"
                      justify="space-around"
                      alignItems="center">
                    <Grid item xs={11}>
                        {waitingKids.map((waitingKid) => (
                            <ChildOnWaitingListAccordion key={waitingKid.id} waitingKid={waitingKid}/>
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
                            neuer Eintrag
                        </Button>
                        <AddChildOnWaitingListForm
                            open={showAddForm}
                            handleClose={() => setShowAddForm(false)}
                        />
                    </Box>
                </Grid>
            </div>
        </main>
    )
}

