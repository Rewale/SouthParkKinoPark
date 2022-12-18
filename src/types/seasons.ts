export enum SeasonsActionTypes {
  FETCH_SEASONS = "FETCH_SEASONS",
  FETCH_SEASONS_SUCCESS = "FETCH_SEASONS_SUCCESS",
  FETCH_SEASONS_ERROR = "FETCH_SEASONS_ERROR",
}

export interface SeasonsState {
  seasons: SeasonModel[],
  loading: boolean,
  error: null | string
}


export interface FetchSeasonsAction {
  type: SeasonsActionTypes.FETCH_SEASONS,
}

export interface FetchSeasonsSuccessAction {
  type: SeasonsActionTypes.FETCH_SEASONS_SUCCESS,
  payload: SeasonModel[]
}
export type SeasonsAction = FetchSeasonsAction | FetchSeasonsSuccessAction | FetchSeasonsErrorAction

export interface FetchSeasonsErrorAction {
  type: SeasonsActionTypes.FETCH_SEASONS_ERROR,
  payload: string,
}

