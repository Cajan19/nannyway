import {fetchAllKids, putKid} from "../../utils/childInCareUtils";

export const FETCH_KIDS = `FETCH_KIDS`;
export const FETCH_KIDS_SUCCESS = `FETCH_KIDS_SUCCESS`;
export const FETCH_KIDS_FAIL = `FETCH_KIDS_FAIL`;
export const ADD_KID = `ADD_KID`;
export const ADD_KID_SUCCESS = `ADD_KID_SUCCESS`;
export const ADD_KID_FAIL = `ADD_KID_FAIL`;


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
    dispatch({ type: ADD_KID});
    try {
        const kid = await putKid(firstName, lastName, birthDate, infoText, pickUpPerson,
            hoursInCarePerWeek, contractTerm, phoneNumber, nameParents, email);
        dispatch({ type: ADD_KID_SUCCESS, payload: kid});
    } catch (error) {
        dispatch({ type: ADD_KID_FAIL, payload: error});
    }
}