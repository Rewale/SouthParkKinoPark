import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

interface ISeriesListProps {
  onClick: (item: SeriesModel) => void
}

export default function SeriesList(props: ISeriesListProps) {
  const [series, setSeries] = useState<SeriesModel[]>([
    {
      episode: 7,
      url: 'https://serv1.freehat.cc/cdn_oilsnctw/sp/907/907_mtv.m3u8',
      name: "Крутой эпизод",
      season: 9
    },
    {
      episode: 8,
      url: 'https://serv1.freehat.cc/cdn_oilsnctw/sp/908/908_mtv.m3u8',
      name: "Очень крутой эпизод",
      season: 9
    }
  ])
  // Превью /upload/iblock/2c8/episode911_big.jpg
  return (
    <View style={styles.container}>
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
