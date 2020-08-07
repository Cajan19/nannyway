import {fetchAllKids, postKid, removeKid, updateKid} from "../../utils/childInCareUtils";

export const FETCH_KIDS = `FETCH_KIDS`;
export const FETCH_KIDS_SUCCESS = `FETCH_KIDS_SUCCESS`;
export const FETCH_KIDS_FAIL = `FETCH_KIDS_FAIL`;
export const ADD_KID = `ADD_KID`;
export const ADD_KID_SUCCESS = `ADD_KID_SUCCESS`;
export const ADD_KID_FAIL = `ADD_KID_FAIL`;
export const DELETE_KID = `DELETE_KID`;
export const DELETE_KID_SUCCESS = `DELETE_KID_SUCCESS`;
export const DELETE_KID_FAIL = `DELETE_KID_FAIL`;
export const EDIT_KID = `EDIT_KID`;
export const EDIT_KID_SUCCESS = `EDIT_KID_SUCCESS`;
export const EDIT_KID_FAIL = `EDIT_KID_FAIL`;


export async function fetchKids(dispatch) {
    dispatch({type: FETCH_KIDS});
    try {
        const kids = await fetchAllKids();
        dispatch({type: FETCH_KIDS_SUCCESS, payload: kids});
    } catch (error) {
        dispatch({type: FETCH_KIDS_FAIL, payload: error});
    }
}

export async function addKid(dispatch, firstName, lastName, birthDate, infoText, pickUpPerson,
                             hoursInCarePerWeek, contractTerm, phoneNumber, nameParents, email) {
    dispatch({type: ADD_KID});
    try {
        const kid = await postKid(firstName, lastName, birthDate, infoText, pickUpPerson,
            hoursInCarePerWeek, contractTerm, phoneNumber, nameParents, email);
        dispatch({type: ADD_KID_SUCCESS, payload: kid});
    } catch (error) {
        dispatch({type: ADD_KID_FAIL, payload: error});
    }
}

export async function deleteKid(dispatch, id) {
    dispatch({type: DELETE_KID});
    try {
        await removeKid(id);
        dispatch({type: DELETE_KID_SUCCESS, payload: id});
    } catch (error) {
        dispatch({type: DELETE_KID_FAIL});
    }
}

export async function editKid(dispatch, id, key, value) {
    dispatch({type: EDIT_KID});
    try {
        const updatedKid = await updateKid(id, key, value);
        dispatch({type: EDIT_KID_SUCCESS, payload: updatedKid});
    } catch (error) {
        dispatch({type: EDIT_KID_FAIL, payload: error});
    }
}

