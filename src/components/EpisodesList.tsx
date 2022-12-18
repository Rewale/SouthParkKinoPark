import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
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
            <ImageBackground style={styles.image} source={{uri: item.preview_url}}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>S{item.season}E{item.episode}</Text>
            </ImageBackground>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  item: {
    marginTop: 24,
    marginHorizontal: 5,
    backgroundColor: 'pink',
    fontSize: 24,
  },
  info: {
    fontSize: 24,
    margin: "auto"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.95
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingVertical: 30,
    paddingHorizontal: 2,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  textSeason: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },


});
