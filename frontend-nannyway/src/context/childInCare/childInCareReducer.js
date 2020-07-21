import {
    ADD_KID,
    ADD_KID_FAIL,
    ADD_KID_SUCCESS, DELETE_KID_SUCCESS,
    FETCH_KIDS,
    FETCH_KIDS_FAIL,
    FETCH_KIDS_SUCCESS
} from "./childInCareActions";

export default function childInCareReducer(state, action) {
    switch (action.type) {
        case FETCH_KIDS:
            return {...state, fetchStatus: `PENDING`};
        case FETCH_KIDS_SUCCESS:
            return {...state, fetchStatus: `SUCCESS`, kids: action.payload};
        case FETCH_KIDS_FAIL:
            return {...state, fetchStatus: `FAILED`};
        case ADD_KID:
            return {...state, addStatus: `PENDING`};
        case ADD_KID_SUCCESS:
            return {...state, addStatus: `SUCCESS`, kids: [...state.kids, action.payload]};
        case ADD_KID_FAIL:
            return {...state, addStatus: `FAILED`};
        case DELETE_KID_SUCCESS:
            return {
                ...state, kids: state.kids.filter((kid) => {
                    return kid.id !== action.payload;
                }),
            };
        default:
            return state;
    }
}