import {Dimensions,  StyleSheet, View} from 'react-native';
import VideoPlayer from 'expo-video-player'
import {ResizeMode} from "expo-av";
import React, {useState} from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import {StatusBar} from "expo-status-bar";


export default function App() {
  const [width, setWidth] = useState<number>(Dimensions.get('window').width)
  const [height, setHeight] = useState<number>(300)
  const [inFullscreen, setInFullscreen] = useState<boolean>(false)


  return (
    <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          resizeMode: ResizeMode.STRETCH,
          source: {
            uri: 'https://serv1.freehat.cc/cdn_oilsnctw/sp/907/907_mtv.m3u8',
          },
          useNativeControls: true
        }}
        fullscreen={{
          enterFullscreen: () => {
            console.log("Enter full screen")
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            setWidth(Dimensions.get('window').height);
            setHeight(Dimensions.get('window').width - 10);
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
