import {combineReducers} from "redux";
import {seasonsReducer} from "./seasonsReducer";
import {episodesReducer} from "./episodesReducer";
import {currentEpisodesReducer} from "./current_episode";

export const rootReducer = combineReducers({
  season: seasonsReducer,
  episodes: episodesReducer,
  currentEpisode: currentEpisodesReducer
})


export type RootState = ReturnType<typeof rootReducer>