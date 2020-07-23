import {FETCH_WAITINGKIDS, FETCH_WAITINGKIDS_FAIL, FETCH_WAITINGKIDS_SUCCESS} from "./childOnWaitingListActions";

export default function childOnWaitingListReducer(state, action) {
    switch (action.type) {
        case FETCH_WAITINGKIDS:
            return {...state, fetchStatus: `PENDING`};
        case FETCH_WAITINGKIDS_SUCCESS:
            return {...state, fetchStatus: `SUCCESS`, waitingKids: action.payload};
        case FETCH_WAITINGKIDS_FAIL:
            return {...state, fetchStatus: `FAILED`};
        default:
            return state;
    }
}