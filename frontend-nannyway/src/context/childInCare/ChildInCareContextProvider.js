import React, {useReducer} from "react";
import childInCareReducer from "./childInCareReducer";
import {ChildInCareDispatchContext, ChildInCareStateContext} from "./ChildInCareContext";

export default function ChildInCareContextProvider({children}) {
    const [state, dispatch] = useReducer(childInCareReducer, {
        kids: [],
        fetchStatus: undefined,
    });

    return(
        <ChildInCareStateContext.Provider value={state}>
            <ChildInCareDispatchContext.Provider value={dispatch}>
                {children}
            </ChildInCareDispatchContext.Provider>
        </ChildInCareStateContext.Provider>
    )

}