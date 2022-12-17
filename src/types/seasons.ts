enum SeasonsActionTypes {
  FETCH_SEASONS = "FETCH_SEASONS",
  FETCH_SEASONS_SUCCESS = "FETCH_SEASONS_SUCCESS",
  FETCH_SEASONS_ERROR = "FETCH_SEASONS_ERROR",
}

interface SeasonsState {
  seasons: SeasonModel[],
  loading: boolean,
  error: null | string
}


interface FetchSeasonsAction {
  type: SeasonsActionTypes.FETCH_SEASONS,
}

interface FetchSeasonsSuccessAction {
  type: SeasonsActionTypes.FETCH_SEASONS_SUCCESS,
  payload: SeasonModel[]
}
type SeasonsAction = FetchSeasonsAction | FetchSeasonsSuccessAction | FetchSeasonsErrorAction

interface FetchSeasonsErrorAction {
  type: SeasonsActionTypes.FETCH_SEASONS_ERROR,
  payload: string,
}

