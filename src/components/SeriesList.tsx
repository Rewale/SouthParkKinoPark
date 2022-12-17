import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import ParseSeasons from "../services/parser";
import DropDownPicker, {DropDownPickerProps, ItemType, ValueType} from "react-native-dropdown-picker";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchSeasons} from "../state/action-creators/season";

interface ISeriesListProps {
  onClick: (item: SeriesModel) => void
}

export default function SeriesList(props: ISeriesListProps) {
  const {seasons, error, loading} = useTypedSelector(state => state.season)

  const [open, setOpen] = useState(false);
  const [season, setSeason] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSeasons())
  }, [])
  const [series, setSeries] = useState<SeriesModel[]>([
    {
      episode: 7,
      url: 'https://serv1.freehat.cc/cdn_oilsnctw/sp/907/907_mtv.m3u8',
      name: "Крутой эпизод",
      season: 9,
      preview_url: ""
    },
    {
      episode: 8,
      url: 'https://serv1.freehat.cc/cdn_oilsnctw/sp/908/908_mtv.m3u8',
      name: "Очень крутой эпизод",
      season: 9,
      preview_url: ""
    }
  ])


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
    console.log("Season value: ", value);
  }
  return (
    <View style={styles.container}>
      <DropDownPicker setValue={changeSeason} value={season} items={seasons.map((value) => {
        return {label: value.num == 0 ? "Other" : value.num.toString(), value: value.num}
      })} open={open} setOpen={setOpen}/>
      <ScrollView>
        {series.map((item) => {
          return (
            <View onTouchEnd={() => {
              props.onClick(item)
            }} style={styles.item} key={item.season + "" + item.episode}>
              <Text>{item.name}</Text>
              <Text>{item.season}-{item.episode}</Text>
            </View>
          )
        })}

      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
