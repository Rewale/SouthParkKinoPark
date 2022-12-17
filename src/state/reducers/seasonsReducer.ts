import {SeasonsAction, SeasonsActionTypes, SeasonsState} from "../../types/seasons";

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
