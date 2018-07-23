import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import CreateDeck from './components/CreateDeck'
import { Constants } from 'expo'

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={ backgroundColor } {...props} />
    </View>
  )
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashcardsStatusBar backgroundColor={ 'white' } />
        <CreateDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App
