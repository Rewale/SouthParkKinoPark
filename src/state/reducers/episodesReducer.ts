import {EpisodesAction, EpisodesActionTypes, EpisodesState} from "../../types/episodes";

const initialState: EpisodesState = {
  episodes: [],
  loading: false,
  error: null
}


export const episodesReducer = (state = initialState,
                               action: EpisodesAction): EpisodesState => {
  switch (action.type) {
    case EpisodesActionTypes.FETCH_EPISODES:
      return {loading: true, error: null, episodes: []}
    case EpisodesActionTypes.FETCH_EPISODES_SUCCESS:
      return {loading: false, error: null, episodes: action.payload}
    case EpisodesActionTypes.FETCH_EPISODES_ERROR:
      return {loading: false, error: action.payload, episodes: []}
    default:
      return state
  }
}
