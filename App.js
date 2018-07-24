import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator } from 'react-navigation'
import { Feather, Entypo } from '@expo/vector-icons'
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import DeckCard from './components/DeckCard'
import reducer from './reducers'
import { white, lightGrey } from './utils/colors'


function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={ backgroundColor } {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: <Feather name='home' size={ 30 } />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: <Entypo name='add-to-list' size={ 30 } />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor={ white } />
          <Tabs />
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
