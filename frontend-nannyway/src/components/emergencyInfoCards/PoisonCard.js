import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import myTheme from "../../styling/muiTheme";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import PoisonQuestions from "./PoisonQuestions";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginBottom: "20px",
        marginTop: "20px",
        backgroundColor: myTheme.palette.warning.dark,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatarG: {
        backgroundColor: myTheme.palette.info.dark,
        fontFamily: "Open Sans",
    },
    basicTypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    heading: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: "large",
        color: myTheme.palette.info.dark,
    },
    paper: {
        backgroundColor: myTheme.palette.primary.dark,
        padding: 5,
    },
    expandIconColor: {
        color: myTheme.palette.info.dark,
    },
    linkColor: {
        textDecoration: "none",
        color: myTheme.palette.info.light,
        '&:hover': {
            color: myTheme.palette.secondary.light
        }
    }
}));

export default function PoisonCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <Grid container
                  direction="row"
                  justify="space-around"
                  alignItems="baseline" spacing={2}>
                <Grid item xs={5} justify={"center"}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="poison" className={classes.avatarG}>
                                G
                            </Avatar>
                        }
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography className={classes.heading}>
                        Giftnotruf
                    </Typography>
                </Grid>
                <Divider/>
            </Grid>
            <Grid container
                  direction="row"
                  justify="space-around"
                  alignItems="baseline">
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0761 19240" className={classes.linkColor}>Baden-Württemberg</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:089 19240" className={classes.linkColor}>Bayern</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:030 19240" className={classes.linkColor}>Berlin, Brandenburg</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0551 19240" className={classes.linkColor}>Bremen, Hamburg, Schleswig-Holstein, Niedersachsen</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:06131 19240" className={classes.linkColor}>Hessen, Rheinland-Pfalz</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0361 730730" className={classes.linkColor}>Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0228 19240" className={classes.linkColor}>Nordrhein-Westfalen</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:06841 19240" className={classes.linkColor}>Saarland</a>
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
            <CardContent>
                <Paper className={classes.paper}>
                    <Typography variant="body2" component="p" className={classes.basicTypo}>
                        Bei einem Notfall mit mutmaßlicher Vergiftung ist schnelles und zielgerichtetes Handeln
                        erforderlich. Immer wenn ein Verdacht auf Kontakt mit Giftstoffen besteht ist der Giftnotruf die
                        richtige Anlaufstelle.
                    </Typography>
                </Paper>
            </CardContent>
            <CardActions disableSpacing>
                <ListItemIcon>
                    <NewReleasesOutlinedIcon/>
                </ListItemIcon>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon className={classes.expandIconColor}/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <PoisonQuestions/>
                </CardContent>
            </Collapse>
        </Card>
    );
}