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
    avatarN: {
        backgroundColor: myTheme.palette.secondary.dark,
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

export default function EmergencyCard() {
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
                <Grid item xs={5}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="emergency" className={classes.avatarN}>
                                N
                            </Avatar>
                        }
                    />
                </Grid>
                <Grid item xs={7} justify={"center"}>
                    <Typography className={classes.heading}>
                        Notruf
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
                            <a href="tel:112">112 (bundesweit)</a>
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
            <CardContent>
                <Paper className={classes.paper}>
                    <Typography variant="body2" component="p" className={classes.basicTypo}>
                        Die Notrufzentrale hilft bei Unfällen, Bränden oder in akuten, eventuell lebensbedrohlichen
                        Notfallsituationen. Auch dann, wenn die Situation unklar oder der Verletzungsstand nicht
                        ersichtlich
                        ist.
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
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className={classes.basicTypo}>
                        • WO ist das Ereignis?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WER ruft an?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WAS ist geschehen?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WIE VIELE Betroffene?
                    </Typography>
                    <Typography paragraph className={classes.basicTypo}>
                        • WARTEN auf Rückfragen!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}