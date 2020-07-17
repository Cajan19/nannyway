import React from 'react';
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
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontFamily: "Open Sans",
    },
    accordionBackGround: {
        backgroundColor: myTheme.palette.primary.dark,
    },
    listBackGround: {
        backgroundColor: myTheme.palette.primary.main,
    },
    list: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: myTheme.palette.primary.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
    },
}));

export default function ChildInCareAccordion({kid}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                       className={classes.accordionBackGround}>
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
                        <Typography className={classes.heading}>MAX</Typography>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.list}>
                        <Paper className={classes.listBackGround}>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ChildCareIcon/>
                                    </ListItemIcon>
                                    <Grid spacing={6}>
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
                                        Geburtsdatum
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
                                        0941-9876543
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
                                        Namen der Eltern
                                    </Typography>
                                </ListItem>
                            </List><Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <QueryBuilderIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        Stunden/Woche in Betreuung
                                    </Typography>
                                </ListItem>
                            </List><Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <HourglassEmptyIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        Vertragslaufzeit
                                    </Typography>
                                </ListItem>
                            </List><Divider/>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <EmojiPeopleIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        Abholberechtigte
                                    </Typography>
                                </ListItem>
                            </List><Divider/>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DescriptionIcon/>
                                    </ListItemIcon>
                                    <Typography>
                                        Freitext: Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                        duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                        sanctus est.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Paper>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}