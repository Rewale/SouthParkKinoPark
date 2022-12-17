import {CurrentEpisodeState, EpisodeAction, EpisodeActionTypes} from "../../types/current_episode";

const initialState: CurrentEpisodeState = {
  episode: null
}


export const currentEpisodesReducer = (state = initialState,
                                       action: EpisodeAction): CurrentEpisodeState => {
  switch (action.type) {
    case EpisodeActionTypes.SET_EPISODE:
      return {episode: action.payload}
    default:
      return state
  }
}
