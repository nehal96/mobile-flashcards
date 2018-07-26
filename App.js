import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { MainNavigatoriOS, MainNavigatorAndroid } from './components/Navigators'
import reducer from './reducers'
import { white, lightGrey, grey, blue, lightBlue } from './utils/colors'
import { setLocalNotification } from './utils/helpers'


function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={ backgroundColor } {...props} />
    </View>
  )
}

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <View style={ styles.container }>
          <FlashcardsStatusBar backgroundColor={ white } />
          { Platform.OS === 'android'
            ? <MainNavigatorAndroid />
            : <MainNavigatoriOS />
          }
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey,
  },
});

export default App
