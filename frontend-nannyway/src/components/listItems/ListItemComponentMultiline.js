import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";

export default function ListItemComponentMultiline({itemIcon, toolTip, typoClass, typoValueOne, typoValueTwo, iconColor}) {
    return (
        <List>
            <ListItem>
                <Tooltip
                    title={toolTip}
                    placement={"top-start"}
                    arrow={true}
                    disableFocusListener={true}
                    TransitionComponent={Zoom}>
                    <ListItemIcon className={iconColor}>
                        {itemIcon}
                    </ListItemIcon>
                </Tooltip>
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