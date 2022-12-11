import {Dimensions,  StyleSheet, View} from 'react-native';
import VideoPlayer from 'expo-video-player'
import {ResizeMode} from "expo-av";
import React, {useState} from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import SeriesList from "./components/SeriesList";


export default function App() {
  const [width, setWidth] = useState<number>(Dimensions.get('window').width)
  const [height, setHeight] = useState<number>(300)
  const [inFullscreen, setInFullscreen] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("https://serv1.freehat.cc/cdn_oilsnctw/sp/906/906_mtv.m3u8")

  return (
    <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          resizeMode: ResizeMode.COVER,
          source: {
            uri: url,
          },
        }}
        fullscreen={{
          enterFullscreen: () => {
            console.log("Enter full screen")
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            setWidth(Dimensions.get('window').height + 16);
            setHeight(Dimensions.get('window').width - 16);
            setInFullscreen(true)
          },
          exitFullscreen: () => {
            console.log("Exit full screen")
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            setWidth(Dimensions.get('window').width);
            setHeight(300);
            setInFullscreen(false)
          },
          inFullscreen: inFullscreen
        }}
        style={{width: width, height: height}}/>
      <SeriesList onClick={item => setUrl(item.url)}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: "center",
    borderRadius: 5
  },
});
