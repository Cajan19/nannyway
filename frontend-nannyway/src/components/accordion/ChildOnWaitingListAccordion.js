import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Divider from "@material-ui/core/Divider";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import TimerIcon from '@material-ui/icons/Timer';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import myTheme from "../../styling/muiTheme";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DescriptionIcon from "@material-ui/icons/Description";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
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
        color: myTheme.palette.secondary.light
    }
}));

export default function ChildOnWaitingListAccordion({waitingKid}) {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const mailAddress = "mailto:" + waitingKid.email.toString();
    const phoneNumber = "tel:" + waitingKid.phoneNumber.toString();

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
                    >
                        <Grid item xs={6}>
                        <Typography className={classes.heading}>Familie:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography className={classes.heading}>{waitingKid.familyName}</Typography>
                        </Grid>
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
                                            {waitingKid.firstName}
                                        </Typography>
                                        <Typography>
                                            {waitingKid.familyName}
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
                                        {waitingKid.birthDate}
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
                                        <a href={phoneNumber}>{waitingKid.phoneNumber}</a>
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
                                        <a href={mailAddress}>{waitingKid.email}</a>
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <TransferWithinAStationIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {waitingKid.getToKnowDate}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <TimerIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {waitingKid.startDateOfCare}
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
                                        {waitingKid.hoursInCarePerWeek}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <HelpOutlineIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {waitingKid.prediction}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <OfflinePinIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {waitingKid.approval}
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <DescriptionIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        {waitingKid.infoText}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider/>
                        </Paper>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

