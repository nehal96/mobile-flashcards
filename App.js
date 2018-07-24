import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import reducer from './reducers'


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
      <Provider store={ createStore(reducer) }>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor={ 'white' } />
          <DeckList />
        </View>
      </Provider>
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
