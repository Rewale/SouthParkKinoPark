import {StyleSheet, View} from 'react-native';
import {registerRootComponent} from 'expo';
import React from "react";
import SeasonsList from "./src/components/SeasonsList";
import {Provider} from "react-redux";
import {store} from "./src/state";
import EpisodesList from "./src/components/EpisodesList";
import Player from "./src/components/Player";


export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Player/>
        <SeasonsList/>
        <EpisodesList/>
      </View>
    </Provider>
  )
}
registerRootComponent(App)

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
