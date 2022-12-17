export enum EpisodeActionTypes {
  SET_EPISODE = "SET_EPISODE",
}

export interface CurrentEpisodeState {
  episode: EpisodeModel | null
}


export interface SetEpisodesAction {
  type: EpisodeActionTypes.SET_EPISODE,
  payload: EpisodeModel
}

export type EpisodeAction = SetEpisodesAction
