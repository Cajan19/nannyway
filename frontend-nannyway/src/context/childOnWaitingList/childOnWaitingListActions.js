import {
    fetchAllWaitingKids,
    postWaitingKid,
    removeWaitingKid,
    updateWaitingKid
} from "../../utils/childOnWaitingListUtils";

export const FETCH_WAITINGKIDS = `FETCH_WAITINGKIDS`;
export const FETCH_WAITINGKIDS_SUCCESS = `FETCH_WAITINGKIDS_SUCCESS`;
export const FETCH_WAITINGKIDS_FAIL = `FETCH_WAITINGKIDS_FAIL`;
export const ADD_WAITINGKID = `ADD_WAITINGKID`;
export const ADD_WAITINGKID_SUCCESS = `ADD_WAITINGKID_SUCCESS`;
export const ADD_WAITINGKID_FAIL = `ADD_WAITINGKID_FAIL`;
export const DELETE_WAITINGKID = `DELETE_WAITINGKID`;
export const DELETE_WAITINGKID_SUCCESS = `DELETE_WAITINGKID_SUCCESS`;
export const DELETE_WAITINGKID_FAIL = `DELETE_WAITINGKID_FAIL`;
export const EDIT_WAITINGKID = `EDIT_WAITINGKID`;
export const EDIT_WAITINGKID_SUCCESS = `EDIT_WAITINGKID_SUCCESS`;
export const EDIT_WAITINGKID_FAIL = `EDIT_WAITINGKID_FAIL`;

export async function fetchWaitingKids(dispatch) {
    dispatch({type: FETCH_WAITINGKIDS});
    try {
        const waitingKids = await fetchAllWaitingKids();
        dispatch({type: FETCH_WAITINGKIDS_SUCCESS, payload: waitingKids});
    } catch (error) {
        dispatch({type: FETCH_WAITINGKIDS_FAIL, payload: error});
    }
}

export async function addWaitingKid(dispatch, familyName, firstName, birthDate, phoneNumber, email, getToKnowDate,
                                    startDateOfCare, hoursInCarePerWeek, prediction, approval, infoText) {
    dispatch({type: ADD_WAITINGKID});
    try {
        const waitingKid = await postWaitingKid(familyName, firstName, birthDate, phoneNumber, email, getToKnowDate,
            startDateOfCare, hoursInCarePerWeek, prediction, approval, infoText);
        dispatch({type: ADD_WAITINGKID_SUCCESS, payload: waitingKid});
    } catch (error) {
        dispatch({type: ADD_WAITINGKID_FAIL, payload: error});
    }
}

export async function deleteWaitingKid(dispatch, id) {
    dispatch({type: DELETE_WAITINGKID});
    try {
        await removeWaitingKid(id);
        dispatch({type: DELETE_WAITINGKID_SUCCESS, payload: id});
    } catch (error) {
        dispatch({type: DELETE_WAITINGKID_FAIL});
    }
}

export async function editWaitingKid(dispatch, id, key, value){
    dispatch({type: EDIT_WAITINGKID});
    try {
        const updatedWaitingKid = await updateWaitingKid(id, key, value);
        dispatch({type: EDIT_WAITINGKID_SUCCESS, payload: updatedWaitingKid});
    } catch (error) {
        dispatch({type: EDIT_WAITINGKID_FAIL, payload: error});
    }
}