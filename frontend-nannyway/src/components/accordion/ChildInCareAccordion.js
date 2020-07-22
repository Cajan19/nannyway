import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import myTheme from "../../styling/muiTheme";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import CakeIcon from '@material-ui/icons/Cake';
import PeopleIcon from '@material-ui/icons/People';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DescriptionIcon from '@material-ui/icons/Description';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Box} from "@material-ui/core";
import {ChildInCareDispatchContext} from "../../context/childInCare/ChildInCareContext";
import {deleteKid} from "../../context/childInCare/childInCareActions";
import DeleteDialog from "../deleteTools/DeleteDialog";
import DeleteKidButton from "../deleteTools/DeleteKidButton";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontFamily: "Finger Paint",
        fontWeight: "bold",
        color: myTheme.palette.secondary.light,
    },
    accordionBackGround: {
        backgroundColor: myTheme.palette.primary.dark,
        marginBottom: "20px",
        marginTop: "20px",
    },
    listBackGround: {
        backgroundColor: myTheme.palette.primary.main,
    },
    list: {
        width: '100%',
        backgroundColor: myTheme.palette.primary.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
    deleteButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        backgroundColor: myTheme.palette.secondary.main,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.dark,
        }
    },
    confirmAction: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        backgroundColor: myTheme.palette.primary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.primary.dark,
        }
    },
}));

export default function ChildInCareAccordion({kid}) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useContext(ChildInCareDispatchContext);

    function handleDelete(event) {
        event.stopPropagation();
        deleteKid(dispatch, kid.id);
        setOpen(false);
    }

    const mailAddress = "mailto:" + kid.email.toString();
    const phoneNumber = "tel:" + kid.phoneNumber.toString();

    return (
        <div className={classes.root}>
            <Accordion className={classes.accordionBackGround}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Grid spacing={6}
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                    >
                        <Typography className={classes.heading}>{kid.firstName}</Typography>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.list}>
                        <Paper className={classes.listBackGround}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChildCareIcon/>
                                    </ListItemIcon>
                                    <Grid>
                                        <Typography>
                                            {kid.firstName}
                                        </Typography>
                                        <Typography>
                                            {kid.lastName}
                                        </Typography>
                                    </Grid>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CakeIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {kid.birthDate}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneInTalkIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        <a href={phoneNumber}>{kid.phoneNumber}</a>
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PeopleIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {kid.nameParents}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <MailOutlineIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                    <a href={mailAddress}>{kid.email}</a>
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <QueryBuilderIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {kid.hoursInCarePerWeek}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <HourglassEmptyIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {kid.contractTerm}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmojiPeopleIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {kid.pickUpPerson}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <DescriptionIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {kid.infoText}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Box m={1}>
                                    <DeleteKidButton
                                    classDeleteButton={classes.deleteButton}
                                    handleClickOpenAction={handleClickOpen}
                                    buttonVariant={"contained"}
                                    matchingIcon={<DeleteForeverIcon/>}
                                    showItemToDelete={kid.firstName}
                                    />
                                </Box>
                                <DeleteDialog
                                handleDeleteAction={handleDelete}
                                handleCloseAction={handleClose}
                                classBasicTypo={classes.basictypo}
                                classConfirmAction={classes.confirmAction}
                                classDeleteButton={classes.deleteButton}
                                openAction={open}
                                />
                            </Grid>
                        </Paper>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}