import {Text, View} from 'react-native';
import {useEffect, useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchSeasons} from "../state/action-creators/season";
import {fetchEpisodes} from "../state/action-creators/episode";

export default function SeasonsList() {
  const {seasons, error, loading} = useTypedSelector(state => state.season)

  const [open, setOpen] = useState(false);
  const [season, setSeason] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSeasons())
  }, [])

  if (loading) {
    return (
      <View>
        <Text>Загрузка сезонов</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  const changeSeason = (value: any) =>{
    const url = value()
    dispatch(fetchEpisodes(url))
    setSeason(url)
  }
  return (
    <DropDownPicker setValue={changeSeason} value={season} items={seasons.map((value) => {
      return {label: value.num == 0 ? "Other" : value.num.toString(), value: value.url}
    })} open={open} setOpen={setOpen}/>
  )
}
