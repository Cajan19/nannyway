import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function AccordionSummaryTemplate({expandClass, typoClass, typoValue}) {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon className={expandClass}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Grid spacing={4}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
            >
                <Typography className={typoClass}>{typoValue}</Typography>
            </Grid>
        </AccordionSummary>
    )
}