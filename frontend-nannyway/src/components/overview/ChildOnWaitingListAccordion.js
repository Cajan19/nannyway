import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import OfflinePinOutlinedIcon from '@material-ui/icons/OfflinePinOutlined';
import Divider from "@material-ui/core/Divider";
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import TimerIcon from '@material-ui/icons/Timer';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import myTheme from "../../styling/muiTheme";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import {Box} from "@material-ui/core";
import DeleteButton from "../deleteTools/DeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteDialog from "../deleteTools/DeleteDialog";
import {
    ChildOnWaitingListDispatchContext, ChildOnWaitingListStateContext,
} from "../../context/childOnWaitingList/ChildOnWaitingListContext";
import {deleteWaitingKid, editWaitingKid} from "../../context/childOnWaitingList/childOnWaitingListActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ListItemComponent from "../listItems/ListItemComponent";
import AccordionSummaryTemplate from "./AccordionSummaryTemplate";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import EditChildOnWaitingListForm from "../forms/EditChildOnWaitingListForm";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    iconColor: {
        color: myTheme.palette.primary.contrastText,
    },
    iconColorHover: {
        color: myTheme.palette.primary.contrastText,
        '&:hover': {
            color: myTheme.palette.secondary.light
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontFamily: "Finger Paint",
        color: myTheme.palette.info.dark,
        letterSpacing: "1px",
    },
    accordionBackGround: {
        backgroundColor: myTheme.palette.info.main,
        marginBottom: "20px",
        marginTop: "20px",
    },
    listBackGround: {
        backgroundColor: myTheme.palette.secondary.dark,
    },
    list: {
        width: '100%',
        backgroundColor: myTheme.palette.secondary.light,
    },
    basictypo: {
        fontFamily: "Open Sans",
        color: myTheme.palette.info.light,
    },
    deleteText: {
        color: myTheme.palette.info.dark,
    },
    deleteButton: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        color: myTheme.palette.secondary.dark,
        backgroundColor: myTheme.palette.primary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.primary.main,
        }
    },
    confirmAction: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        backgroundColor: myTheme.palette.secondary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.dark,
        }
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

export default function ChildOnWaitingListAccordion({waitingKid}) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [showAddFormPhoneNumber, setShowAddFormPhoneNumber] = useState(false);
    const [showAddFormEmail, setShowAddFormEmail] = useState(false);
    const [showAddFormHoursInCare, setShowAddFormHoursInCare] = useState(false);
    const [showAddFormPrediction, setShowAddFormPrediction] = useState(false);
    const [showAddFormInfoText, setShowAddFormInfoText] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useContext(ChildOnWaitingListDispatchContext);

    function handleDelete(event) {
        event.stopPropagation();
        deleteWaitingKid(dispatch, waitingKid.id);
        setOpen(false);
    }

    const mailAddress = "mailto:" + waitingKid.email.toString();
    const phoneNumber = "tel:" + waitingKid.phoneNumber.toString();

    const [update, setUpdate] = useState("")
    const {editStatus} = useContext(ChildOnWaitingListStateContext)

    useEffect(() => {
        if (editStatus === `SUCCESS`) {
            setUpdate("");
        }
    }, [editStatus]);

    function handleSubmitPhoneNumber() {
        editWaitingKid(dispatch, waitingKid.id, "phoneNumber", update).then(() => setShowAddFormPhoneNumber(false));
    }

    function handleSubmitEmail() {
        editWaitingKid(dispatch, waitingKid.id, "email", update).then(() => setShowAddFormEmail(false));
    }

    function handleSubmitHoursInCare() {
        editWaitingKid(dispatch, waitingKid.id, "hoursInCarePerWeek", update).then(() => setShowAddFormHoursInCare(false));
    }

    function handleSubmitPrediction() {
        editWaitingKid(dispatch, waitingKid.id, "prediction", update).then(() => setShowAddFormPrediction(false));
    }

    function handleSubmitInfoText() {
        editWaitingKid(dispatch, waitingKid.id, "infoText", update).then(() => setShowAddFormInfoText(false));
    }

    function handleUpdateWaitingKid(event){
        setUpdate(event.target.value);
    }


    return (
        <div className={classes.root}>
            <Accordion className={classes.accordionBackGround}>
                <AccordionSummaryTemplate
                    typoClass={classes.heading}
                    typoValue={"Familie " + waitingKid.familyName}
                    expandClass={classes.expandIconColor}
                />
                <AccordionDetails>
                    <div className={classes.list}>
                        <Paper className={classes.listBackGround} square={true}>
                            <List>
                                <ListItem>
                                    <Tooltip
                                        title="Name"
                                        placement={"top-start"}
                                        arrow={true}
                                        disableFocusListener={true}
                                        TransitionComponent={Zoom}>
                                        <ListItemIcon>
                                            <ChildCareIcon className={classes.iconColor}/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Grid>
                                        <Typography className={classes.basictypo}>
                                            {waitingKid.firstName}
                                        </Typography>
                                        <Typography className={classes.basictypo}>
                                            {waitingKid.familyName}
                                        </Typography>
                                    </Grid>
                                </ListItem>
                            </List>
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<CakeOutlinedIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={waitingKid.birthDate}
                                iconColor={classes.iconColor}
                                toolTip={"Geburtsdatum"}
                            />
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<PhoneInTalkIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={<a className={classes.linkColor}
                                              href={phoneNumber}>{waitingKid.phoneNumber}</a>}
                                iconColor={classes.iconColorHover}
                                toolTip={"Kontaktnummer"}
                                handleClickEdit={() => setShowAddFormPhoneNumber(true)}
                            />
                            <EditChildOnWaitingListForm
                                open={showAddFormPhoneNumber}
                                handleClose={() => setShowAddFormPhoneNumber(false)}
                                basicFontClass={classes.basictypoForm}
                                fullWidthBoolean={true}
                                labelText={"Kontaktnummer"}
                                fieldType={"tel"}
                                shrinkBoolean={false}
                                multilineBoolean={false}
                                handleSubmitAction={handleSubmitPhoneNumber}
                                handleChangeAction={handleUpdateWaitingKid}
                            />
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<MailOutlineIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={<a className={classes.linkColor} href={mailAddress}>{waitingKid.email}</a>}
                                iconColor={classes.iconColorHover}
                                toolTip={"E-Mail"}
                                handleClickEdit={() => setShowAddFormEmail(true)}
                            />
                            <EditChildOnWaitingListForm
                                open={showAddFormEmail}
                                handleClose={() => setShowAddFormEmail(false)}
                                basicFontClass={classes.basictypoForm}
                                fullWidthBoolean={true}
                                labelText={"E-Mail"}
                                fieldType={"email"}
                                shrinkBoolean={false}
                                multilineBoolean={false}
                                handleSubmitAction={handleSubmitEmail}
                                handleChangeAction={handleUpdateWaitingKid}
                            />
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<TransferWithinAStationIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={waitingKid.getToKnowDate}
                                iconColor={classes.iconColor}
                                toolTip={"Kennenlernen am"}
                            />
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<TimerIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={waitingKid.startDateOfCare}
                                iconColor={classes.iconColor}
                                toolTip={"Betreuung gewünscht ab"}
                            />
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<QueryBuilderIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={waitingKid.hoursInCarePerWeek}
                                iconColor={classes.iconColorHover}
                                toolTip={"Betreuungsstunden / Woche"}
                                handleClickEdit={() => setShowAddFormHoursInCare(true)}
                            />
                            <EditChildOnWaitingListForm
                                open={showAddFormHoursInCare}
                                handleClose={() => setShowAddFormHoursInCare(false)}
                                basicFontClass={classes.basictypoForm}
                                fullWidthBoolean={true}
                                labelText={"Betreuungsstunden pro Woche"}
                                fieldType={"number"}
                                shrinkBoolean={false}
                                multilineBoolean={false}
                                handleSubmitAction={handleSubmitHoursInCare}
                                handleChangeAction={handleUpdateWaitingKid}
                            />
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<HelpOutlineIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={waitingKid.prediction}
                                iconColor={classes.iconColorHover}
                                toolTip={"Prognose"}
                                handleClickEdit={() => setShowAddFormPrediction(true)}
                            />
                            <EditChildOnWaitingListForm
                                open={showAddFormPrediction}
                                handleClose={() => setShowAddFormPrediction(false)}
                                basicFontClass={classes.basictypoForm}
                                fullWidthBoolean={true}
                                labelText={"Prognose"}
                                shrinkBoolean={false}
                                multilineBoolean={true}
                                handleSubmitAction={handleSubmitPrediction}
                                handleChangeAction={handleUpdateWaitingKid}
                            />
                            <Divider/>
                            <List>
                                <ListItem>
                                    <Tooltip
                                        title="Zusage"
                                        placement={"top-start"}
                                        arrow={true}
                                        disableFocusListener={true}
                                        TransitionComponent={Zoom}>
                                        <ListItemIcon>
                                            <OfflinePinOutlinedIcon className={classes.iconColor}/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <FormControlLabel className={classes.basictypo}
                                                      control={
                                                          <Switch
                                                              // checked={waitingKid.approval}
                                                              name={"approval"}
                                                              // onChange={handleChange}
                                                              color="primary"
                                                              // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                          />}
                                                      label="Zusage"
                                                      labelPlacement="start"
                                                      value="start"
                                    />
                                </ListItem>
                            </List>
                            <Divider/>
                            <ListItemComponent
                                itemIcon={<DescriptionOutlinedIcon/>}
                                typoClass={classes.basictypo}
                                typoValue={waitingKid.infoText}
                                iconColor={classes.iconColorHover}
                                toolTip={"Freitext"}
                                handleClickEdit={() => setShowAddFormInfoText(true)}
                            />
                            <EditChildOnWaitingListForm
                                open={showAddFormInfoText}
                                handleClose={() => setShowAddFormInfoText(false)}
                                basicFontClass={classes.basictypoForm}
                                fullWidthBoolean={true}
                                labelText={"Freitext"}
                                shrinkBoolean={false}
                                multilineBoolean={true}
                                handleSubmitAction={handleSubmitInfoText}
                                handleChangeAction={handleUpdateWaitingKid}
                            />
                            <Divider/>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Box m={1}>
                                    <DeleteButton
                                        classDeleteButton={classes.deleteButton}
                                        handleClickOpenAction={handleClickOpen}
                                        buttonVariant={"contained"}
                                        matchingIcon={<DeleteForeverIcon/>}
                                        showItemToDelete={"Eintrag"}
                                        buttonSize={"small"}
                                    />
                                </Box>
                                <DeleteDialog
                                    handleDeleteAction={handleDelete}
                                    handleCloseAction={handleClose}
                                    classBasicTypo={classes.deleteText}
                                    classConfirmAction={classes.confirmAction}
                                    classDeleteButton={classes.deleteButton}
                                    openAction={open}
                                    deleteContent={"diesen Eintrag"}
                                />
                            </Grid>
                        </Paper>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

