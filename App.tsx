import { StyleSheet } from 'react-native';
import VideoPlayer from 'expo-video-player'
import {ResizeMode} from "expo-av";



export default function App() {
  return (
      <VideoPlayer
          videoProps={{
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: 'https://serv1.freehat.cc/cdn_oilsnctw/sp/907/907_mtv.m3u8',
            },

          }}

      />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
