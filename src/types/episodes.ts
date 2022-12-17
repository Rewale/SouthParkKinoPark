export enum EpisodesActionTypes {
  FETCH_EPISODES = "FETCH_EPISODES",
  FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS",
  FETCH_EPISODES_ERROR = "FETCH_EPISODES_ERROR",
}

export interface EpisodesState {
  episodes: EpisodeModel[],
  loading: boolean,
  error: null | string
}


export interface FetchEpisodesAction {
  type: EpisodesActionTypes.FETCH_EPISODES,
}

export interface FetchEpisodesSuccessAction {
  type: EpisodesActionTypes.FETCH_EPISODES_SUCCESS,
  payload: EpisodeModel[]
}
export type EpisodesAction = FetchEpisodesAction | FetchEpisodesSuccessAction | FetchEpisodesErrorAction

export interface FetchEpisodesErrorAction {
  type: EpisodesActionTypes.FETCH_EPISODES_ERROR,
  payload: string,
}

