import React, {useContext} from "react";
import NannyAppBar from "../../components/header/NannyAppBar";
import Footer from "../../components/footer/Footer";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProgressSpinner from "../../components/spinner/ProgressSpinner";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import Divider from "@material-ui/core/Divider";
import ListItemComponentMultiline from "../../components/listItems/ListItemComponentMultiline";
import ListItemComponent from "../../components/listItems/ListItemComponent";
import DeleteButton from "../../components/deleteTools/DeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteDialog from "../../components/deleteTools/DeleteDialog";
import {deleteUser} from "../../utils/auth-utils";
import {removeJWTToken} from "../../utils/jwt-utils";
import {LOGIN_FAILED} from "../../context/user/UserContextProvider";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "Finger Paint",
        color: myTheme.palette.secondary.dark,
    },
    basictypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    cardBackGround: {
        backgroundColor: myTheme.palette.secondary.dark,
        marginBottom: "20px",
        marginTop: "20px",
        opacity: "90%",
    },
    deleteText: {
        color: myTheme.palette.info.dark,
    },
    paperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: myTheme.palette.secondary.main,
        fontFamily: "Open Sans",
        marginBottom: "20px",
    },
    image: {
        backgroundImage: 'url("https://images.pexels.com/photos/2088167/pexels-photo-2088167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '75vh',
    },
    confirmAction: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        backgroundColor: myTheme.palette.primary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.primary.dark,
        }
    },
    error: {
        color: myTheme.palette.error.main,
    },
    deleteButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.primary.dark,
        backgroundColor: myTheme.palette.secondary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.main,
        }
    },
}));

export default function UserProfile() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {userData, fetchStatus} = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);

    function handleDelete() {
        deleteUser(userData.username)
            .then(removeJWTToken())
            .catch((e) => console.error(e))
        dispatch({type: LOGIN_FAILED})
        setOpen(false);
    }

    return (
        <div>
            <NannyAppBar colorStyle={"secondary"}/>
            <main>
                <div className={classes.image}>
                    <Paper className={classes.paperTop}>
                        <Typography variant={"h4"} className={classes.heading}>
                            Nutzerprofil
                        </Typography>
                    </Paper>
                    <Box m={4}>
                        {fetchStatus === "PENDING" && <ProgressSpinner/>}
                        {fetchStatus === "FAILED" && (
                            <Typography className={classes.error}>
                                Daten konnten nicht geladen werden
                            </Typography>)}
                    </Box>
                    <Grid container spacing={2}
                          direction="row"
                          justify="center"
                          alignItems="baseline">
                        <Grid item xs={11}>
                            <Card className={classes.cardBackGround}>
                                <CardContent>
                                    <ListItemComponent
                                        itemIcon={<LoyaltyOutlinedIcon/>}
                                        typoClass={classes.basictypo}
                                        typoValue={userData.username}
                                    />
                                    <Divider/>
                                    <ListItemComponentMultiline
                                        itemIcon={<RecentActorsOutlinedIcon/>}
                                        typoClass={classes.basictypo}
                                        typoValueOne={userData.firstName}
                                        typoValueTwo={userData.lastName}
                                    />
                                    <Divider/>
                                    <ListItemComponent
                                        itemIcon={<MailOutlinedIcon/>}
                                        typoClass={classes.basictypo}
                                        typoValue={userData.email}
                                    />
                                    <Divider/>
                                </CardContent>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <DeleteButton
                                            buttonSize={"small"}
                                            classDeleteButton={classes.deleteButton}
                                            handleClickOpenAction={handleClickOpen}
                                            buttonVariant={"contained"}
                                            matchingIcon={<DeleteForeverIcon/>}
                                            showItemToDelete={"Account"}
                                        />
                                        <DeleteDialog
                                            handleDeleteAction={handleDelete}
                                            handleCloseAction={handleClose}
                                            classBasicTypo={classes.deleteText}
                                            classConfirmAction={classes.confirmAction}
                                            classDeleteButton={classes.deleteButton}
                                            openAction={open}
                                        />
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </main>
            <Footer colorStyle={"secondary"}/>
        </div>
    )
}