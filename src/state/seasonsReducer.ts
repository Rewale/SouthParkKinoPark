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

const initialState: SeasonsState = {
  seasons: [],
  loading: false,
  error: null
}


export const seasonsReducer = (state = initialState,
                               action: SeasonsAction): SeasonsState => {
  switch (action.type) {
    case SeasonsActionTypes.FETCH_SEASONS:
      return {loading: true, error: null, seasons: []}
    case SeasonsActionTypes.FETCH_SEASONS_SUCCESS:
      return {loading: false, error: null, seasons: action.payload}
    case SeasonsActionTypes.FETCH_SEASONS_ERROR:
      return {loading: false, error: action.payload, seasons: []}
    default:
      return state
  }
}
