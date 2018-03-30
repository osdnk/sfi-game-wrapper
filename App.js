import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameContainer from 'sfi-sample-game'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={{
          position: 'absolute',
          top: 100,
          bottom: 0,
          left: 0,
          right: 0
        }}>
          <GameContainer/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
