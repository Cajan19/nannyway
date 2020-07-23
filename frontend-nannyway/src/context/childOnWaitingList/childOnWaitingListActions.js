import {fetchAllWaitingKids} from "../../utils/childOnWaitingListUtils";

export const FETCH_WAITINGKIDS = `FETCH_WAITINGKIDS`;
export const FETCH_WAITINGKIDS_SUCCESS = `FETCH_WAITINGKIDS_SUCCESS`;
export const FETCH_WAITINGKIDS_FAIL = `FETCH_WAITINGKIDS_FAIL`;

export async function fetchWaitingKids(dispatch) {
    dispatch({type: FETCH_WAITINGKIDS});
    try {
        const waitingKids = await fetchAllWaitingKids();
        dispatch({type: FETCH_WAITINGKIDS_SUCCESS, payload: waitingKids});
    } catch (error) {
        dispatch({type: FETCH_WAITINGKIDS_FAIL, payload: error});
    }
}