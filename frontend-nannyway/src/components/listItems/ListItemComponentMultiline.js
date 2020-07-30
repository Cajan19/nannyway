import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

export default function ListItemComponentMultiline({itemIcon, typoClass, typoValueOne, typoValueTwo}) {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    {itemIcon}
                </ListItemIcon>
                <Grid>
                    <Typography className={typoClass} paragraph>
                        {typoValueOne}
                    </Typography>
                    <Typography className={typoClass} paragraph>
                        {typoValueTwo}
                    </Typography>
                </Grid>
            </ListItem>
        </List>
    )
}