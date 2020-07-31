import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function AccordionSummaryMultiline({expandClass, typoClass, typoValue}) {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon className={expandClass}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Grid spacing={6}
                  container
            >
                <Grid item xs={3}>
                    <Typography className={typoClass} aria-expanded={true}>Familie:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography className={typoClass}>{typoValue}</Typography>
                </Grid>
            </Grid>
        </AccordionSummary>
    )
}