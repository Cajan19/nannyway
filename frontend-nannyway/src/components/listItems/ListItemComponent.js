import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

export default function ListItemComponent({itemIcon, typoClass, typoValue}) {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    {itemIcon}
                </ListItemIcon>
                    <Typography className={typoClass} gutterBottom={false}>
                        {typoValue}
                    </Typography>
            </ListItem>
        </List>
    )
}