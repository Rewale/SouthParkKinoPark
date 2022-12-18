import {Dispatch} from "redux";
import {ParseSeries, ParseVideoUrl} from "../../services/parser";
import {EpisodesAction, EpisodesActionTypes} from "../../types/episodes";
import {EpisodeAction, EpisodeActionTypes} from "../../types/current_episode";

export const fetchEpisodes = (url: string) => {
  return async (dispatch: Dispatch<EpisodesAction>) => {
    try {
      dispatch({type: EpisodesActionTypes.FETCH_EPISODES})
      const episodeModels = await ParseSeries(url)
      dispatch({type: EpisodesActionTypes.FETCH_EPISODES_SUCCESS, payload: episodeModels})
    } catch (e) {
      dispatch({type: EpisodesActionTypes.FETCH_EPISODES_ERROR, payload: 'Ошибка загрузки эпизодов'})
    }
  }
}
export const setCurrentEpisode = (episode: EpisodeModel) => {
  return async (dispatch: Dispatch<EpisodeAction>) => {
    // TODO: сделать loading и error
    try {
      episode.video_url = await ParseVideoUrl(episode.html_url)
      dispatch({type: EpisodeActionTypes.SET_EPISODE, payload: episode})
    }
    catch (e) {
      console.log(e);
    }
  }
}
