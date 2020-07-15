import {FETCH_KIDS, FETCH_KIDS_FAIL, FETCH_KIDS_SUCCESS} from "./childInCareActions";

export default function childInCareReducer(state, action) {
    switch (action.type) {
        case FETCH_KIDS:
            return {...state, fetchStatus: `PENDING`};
        case FETCH_KIDS_SUCCESS:
            return {...state, fetchStatus: `SUCCESS`, kids: action.payload};
        case FETCH_KIDS_FAIL:
            return {...state, fetchStatus: `FAILED`};
        default:
            return state;
    }
}