import {createContext, useReducer} from "react";

import {UserReducer, UserInitialState, UserType} from "../reducers/UseReducer";
import {ThemeReducer, ThemeInitialState, ThemeType} from "../reducers/ThemeReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    user: UserType;
    theme: ThemeType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const InitialSate = {
    user: UserInitialState,
    theme: ThemeInitialState
}

export const Context = createContext<ContextType>({
    state: InitialSate,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: UserReducer(state.user, action),
    theme: ThemeReducer(state.theme, action)
});


type Props = {
    children?: React.ReactNode;
}

export const ContextProvider = ({children}:Props) => {
    const [state, dispatch] = useReducer(mainReducer, InitialSate)
    
    return (
        <Context.Provider value={ {state, dispatch} }>
            {children}
        </Context.Provider>
    );
}