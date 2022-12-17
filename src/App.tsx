import {Dimensions, StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'expo-video-player'
import {ResizeMode} from "expo-av";
import React, {useState} from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import SeriesList from "./components/SeriesList";
import {setStatusBarHidden} from 'expo-status-bar'
import ParseHTML from "./services/parser";


export default function App() {
  const [width, setWidth] = useState<number>(Dimensions.get('window').width)
  const [height, setHeight] = useState<number>(300)
  const [inFullscreen, setInFullscreen] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("https://serv1.freehat.cc/cdn_oilsnctw/sp/906/906_mtv.m3u8")

  return (
    <View style={styles.container}>
      <VideoPlayer
        defaultControlsVisible={false}
        videoProps={{
          resizeMode: ResizeMode.COVER,
          source: {
            uri: url,
          },
          useNativeControls: false,
          usePoster: true,
        }}
        fullscreen={{
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            setWidth(Dimensions.get('window').height + 16);
            setHeight(Dimensions.get('window').width);
            setInFullscreen(true)
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
            setWidth(Dimensions.get('window').width);
            setHeight(300);
            setInFullscreen(false)
          },
          inFullscreen: inFullscreen,
        }}
        icon={{
          style: styles.controls
        }}
        textStyle={styles.controls}
        slider={{style: styles.controls}}

        style={{width: width, height: height}}/>
      <SeriesList onClick={item => setUrl(item.url)}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: "center",
    overflow: "scroll",
  },
  controls:{
    marginBottom: 10
  }
});
