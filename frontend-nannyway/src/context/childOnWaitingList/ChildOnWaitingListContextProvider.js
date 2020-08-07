import React, {useReducer} from "react";
import childOnWaitingListReducer from "./childOnWaitingListReducer";
import {ChildOnWaitingListDispatchContext, ChildOnWaitingListStateContext} from "./ChildOnWaitingListContext";

export default function ChildOnWaitingListContextProvider({children}) {
    const [state, dispatch] = useReducer(childOnWaitingListReducer, {
        waitingKids: [],
        fetchStatus: undefined,
    });

    return (
        <ChildOnWaitingListStateContext.Provider value={state}>
            <ChildOnWaitingListDispatchContext.Provider value={dispatch}>
                {children}
            </ChildOnWaitingListDispatchContext.Provider>
        </ChildOnWaitingListStateContext.Provider>
    )
}