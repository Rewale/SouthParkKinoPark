import VideoPlayer from "expo-video-player";
import {ResizeMode} from "expo-av";
import {setStatusBarHidden} from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import {Dimensions, StyleSheet} from "react-native";
import React, {useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

export default function Player() {

  const [width, setWidth] = useState<number>(Dimensions.get('window').width)
  const [height, setHeight] = useState<number>(300)
  const [inFullscreen, setInFullscreen] = useState<boolean>(false)
  const {episode} = useTypedSelector(state => state.currentEpisode)

  const url = episode?.video_url == undefined ?
    "https://serv1.freehat.cc/cdn_oilsnctw/sp/907/907_mtv.m3u8" :
    episode.video_url
  console.log("Episode from state: ", episode);

  return (
    <VideoPlayer
      defaultControlsVisible={false}
      videoProps={{
        resizeMode: ResizeMode.COVER,

        source: {
          uri: url
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
  controls: {
    marginBottom: 10
  }
});
