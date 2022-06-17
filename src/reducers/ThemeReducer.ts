import {reducerActionType} from "../types/reducerActionType";

export type ThemeType = {
    status: "dark" | "light";
    color: "dark" | "light"
}

export const ThemeInitialState: ThemeType = {
    status: "light",
    color: "dark"
}

export const ThemeReducer = (state: ThemeType, action: reducerActionType) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return {...state, status: action.payload.status, color: action.payload.color}
        break;
    }

    return state;
}