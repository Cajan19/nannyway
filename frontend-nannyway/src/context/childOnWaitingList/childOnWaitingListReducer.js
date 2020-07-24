import {
    ADD_WAITINGKID, ADD_WAITINGKID_FAIL, ADD_WAITINGKID_SUCCESS, DELETE_WAITINGKID_SUCCESS,
    FETCH_WAITINGKIDS,
    FETCH_WAITINGKIDS_FAIL,
    FETCH_WAITINGKIDS_SUCCESS
} from "./childOnWaitingListActions";

export default function childOnWaitingListReducer(state, action) {
    switch (action.type) {
        case FETCH_WAITINGKIDS:
            return {...state, fetchStatus: `PENDING`};
        case FETCH_WAITINGKIDS_SUCCESS:
            return {...state, fetchStatus: `SUCCESS`, waitingKids: action.payload};
        case FETCH_WAITINGKIDS_FAIL:
            return {...state, fetchStatus: `FAILED`};
        case ADD_WAITINGKID:
            return {...state, addStatus: `PENDING`};
        case ADD_WAITINGKID_SUCCESS:
            return {...state, addStatus: `SUCCESS`, waitingKids: [...state.waitingKids, action.payload]};
        case ADD_WAITINGKID_FAIL:
            return {...state, addStatus: `FAILED`};
        case DELETE_WAITINGKID_SUCCESS:
            return {
                ...state, waitingKids: state.waitingKids.filter((waitingKid) => {
                    return waitingKid.id !== action.payload;
                }),
            };
        default:
            return state;
    }
}