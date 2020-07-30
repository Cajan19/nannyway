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
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ChildCareOutLinedIcon from '@material-ui/icons/ChildCareOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Box} from "@material-ui/core";
import {ChildInCareDispatchContext} from "../../context/childInCare/ChildInCareContext";
import {deleteKid} from "../../context/childInCare/childInCareActions";
import DeleteDialog from "../deleteTools/DeleteDialog";
import DeleteButton from "../deleteTools/DeleteButton";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontFamily: "Finger Paint",
        color: myTheme.palette.secondary.main,
    },
    accordionBackGround: {
        backgroundColor: myTheme.palette.success.dark,
        marginBottom: "20px",
        marginTop: "20px",
    },
    listBackGround: {
        backgroundColor: myTheme.palette.primary.dark,
    },
    list: {
        width: '100%',
        backgroundColor: myTheme.palette.primary.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    deleteText: {
        color: myTheme.palette.info.dark,
    },
    deleteButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.primary.dark,
        backgroundColor: myTheme.palette.secondary.light,
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
    expandIconColor: {
        color: myTheme.palette.secondary.main,
    },
    linkColor: {
        textDecoration: "none",
        color: myTheme.palette.info.light,
        '&:hover': {
            color: myTheme.palette.secondary.light
        }
    }
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
                    expandIcon={<ExpandMoreIcon className={classes.expandIconColor}/>}
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
                                        <ChildCareOutLinedIcon/>
                                    </ListItemIcon>
                                    <Grid>
                                        <Typography className={classes.basictypo}>
                                            {kid.firstName}
                                        </Typography>
                                        <Typography className={classes.basictypo}>
                                            {kid.lastName}
                                        </Typography>
                                    </Grid>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CakeOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        {kid.birthDate}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneInTalkOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        <a className={classes.linkColor} href={phoneNumber}>{kid.phoneNumber}</a>
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PeopleOutlineOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        {kid.nameParents}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <MailOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        <a className={classes.linkColor} href={mailAddress}>{kid.email}</a>
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <QueryBuilderOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        {kid.hoursInCarePerWeek}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <HourglassEmptyOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        {kid.contractTerm}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmojiPeopleOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
                                        {kid.pickUpPerson}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <DescriptionOutlinedIcon/>
                                    </ListItemIcon>
                                    <Typography className={classes.basictypo}>
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
                                    <DeleteButton
                                        buttonSize={"small"}
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
                                    classBasicTypo={classes.deleteText}
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