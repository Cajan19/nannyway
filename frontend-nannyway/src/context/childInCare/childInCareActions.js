import {fetchAllKids} from "../../utils/childInCareUtils";

export const FETCH_KIDS = `FETCH_KIDS`;
export const FETCH_KIDS_SUCCESS = `FETCH_KIDS_SUCCESS`;
export const FETCH_KIDS_FAIL = `FETCH_KIDS_FAIL`;

export async function fetchKids(dispatch) {
    dispatch({type: FETCH_KIDS});
    try {
        const kids = await fetchAllKids();
        dispatch({type: FETCH_KIDS_SUCCESS, payload: kids});
    } catch (error) {
        dispatch({type: FETCH_KIDS_FAIL, payload: error});
    }
}