import {Dispatch} from "redux";
import ParseSeasons from "../../services/parser";
import {SeasonsAction, SeasonsActionTypes} from "../../types/seasons";

export const fetchSeasons = () => {
  return async (dispatch: Dispatch<SeasonsAction>) => {
    try {
      dispatch({type: SeasonsActionTypes.FETCH_SEASONS})
      const seasons = await ParseSeasons()
      dispatch({type: SeasonsActionTypes.FETCH_SEASONS_SUCCESS, payload: seasons})
    } catch (e) {
      dispatch({type: SeasonsActionTypes.FETCH_SEASONS_ERROR, payload: 'Ошибка загрузки сезонов'})
    }
  }
}