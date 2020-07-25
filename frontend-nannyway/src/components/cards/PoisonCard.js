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

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginBottom: "20px",
        marginTop: "20px",
        backgroundColor: myTheme.palette.secondary.light,
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
        backgroundColor: myTheme.palette.info.light,
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
        color: myTheme.palette.info.light,
    },
    paper: {
        backgroundColor: myTheme.palette.secondary.main,
        padding: 5,
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
                            <a href="tel:0761 19240">Baden-Württemberg</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:089 19240">Bayern</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:030 19240">Berlin, Brandenburg</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0551 19240">Bremen, Hamburg, Schleswig-Holstein, Niedersachsen</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:06131 19240">Hessen, Rheinland-Pfalz</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0361 730730">Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:0228 19240">Nordrhein-Westfalen</a>
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkOutlinedIcon/>
                        </ListItemIcon>
                        <Typography className={classes.basicTypo}>
                            <a href="tel:06841 19240">Saarland</a>
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
            <CardContent>
                <Paper className={classes.paper}>
                    <Typography variant="body2" component="p" className={classes.basicTypo}>
                        Bei einem Notfall mit mutmaßlicher Vergiftung ist schnelles und zielgerichtetes Handeln erforderlich.
                        Immer wenn ein Verdacht auf Kontakt mit Giftstoffen besteht ist der Giftnotruf die richtige Anlaufstelle.
                    </Typography>
                </Paper>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <NewReleasesOutlinedIcon/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className={classes.basicTypo}>
                        • WER ist betroffen?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WAS wurde eingenommen?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WIE wurde es eingenommen?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WANN wurde es eingenommen?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WIE GEHT es der betroffenen Person?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WIE VIEL wiegt die betroffene Person?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WARTEN auf Rückfragen!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}