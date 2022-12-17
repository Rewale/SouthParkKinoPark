import {combineReducers} from "redux";
import {seasonsReducer} from "./seasonsReducer";

export const rootReducer = combineReducers({
  season: seasonsReducer,
})


export type RootState = ReturnType<typeof rootReducer>