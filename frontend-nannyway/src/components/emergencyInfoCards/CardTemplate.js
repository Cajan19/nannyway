import React from 'react';
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
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
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

export default function CardTemplate({
                                         cardClassName, avatarAriaLabel, avatarClassName, avatarLetter, classHeading,
                                         emergencyType, typoClass, paperClass, infoText, phoneLink, phoneText, cardContent
                                     }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();

    return (
        <Card className={cardClassName}>
            <Grid container
                  direction="row"
                  justify="space-around"
                  alignItems="baseline" spacing={2}>
                <Grid item xs={5}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={avatarAriaLabel} className={avatarClassName}>
                                {avatarLetter}
                            </Avatar>
                        }
                    />
                </Grid>
                <Grid item xs={7} justify={"center"}>
                    <Typography className={classHeading}>
                        {emergencyType}
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
                        <Typography className={typoClass}>
                            <a className={classes.linkColor} href={phoneLink}>{phoneText}</a>
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
            <CardContent>
                <Paper className={paperClass}>
                    <Typography variant="body2" component="p" className={typoClass}>
                        {infoText}
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
                {cardContent}
            </Collapse>
        </Card>
    );
}