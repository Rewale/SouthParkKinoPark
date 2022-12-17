import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {setCurrentEpisode} from "../state/action-creators/episode";

export default function EpisodesList() {

  const {episodes, loading, error} = useTypedSelector(state => state.episodes)
  const dispatch = useDispatch()

  if (loading) {
    return <Text>Загрузка серий...</Text>
  }
  if (loading) {
    return <Text>{error}</Text>
  }

  return (
    <ScrollView>
      {episodes.map((item) => {
        return (
          <View onTouchEnd={() => {
            dispatch(setCurrentEpisode(item))
          }} style={styles.item} key={item.season + "" + item.episode}>
            <Text>{item.name}</Text>
            <Text>{item.season}-{item.episode}</Text>
            <Image source={{uri: item.preview_url}}/>
          </View>
        )
      })}
    </ScrollView>
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
