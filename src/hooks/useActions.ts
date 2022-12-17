import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as SeasonsActionCreators from '../state/action-creators/season'

export const useActions = () =>{
  const dispatch = useDispatch()
  return bindActionCreators(SeasonsActionCreators, dispatch)
}