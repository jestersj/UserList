import {combineReducers} from "redux";
import {formatReducer} from "./formatReducer";

export const rootReducer = combineReducers({
    format: formatReducer,
})

export type RootState = ReturnType<typeof rootReducer>