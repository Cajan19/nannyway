import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

export default function ListItemComponent({itemIcon, typoClass, typoValue, iconColor, toolTip}) {
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
                    <Typography className={typoClass} gutterBottom={false}>
                        {typoValue}
                    </Typography>
            </ListItem>
        </List>
    )
}