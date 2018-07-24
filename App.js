import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator } from 'react-navigation'
import { Feather, Entypo } from '@expo/vector-icons'
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import reducer from './reducers'
import { white, lightGrey, grey, blue } from './utils/colors'


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
      tabBarIcon: ({ tintColor }) => <Feather name='home' size={ 30 } color={ tintColor } />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={ 30 } color={ tintColor } />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    inactiveTintColor: grey,
    activeTintColor: blue,
    style: {
      height: 50,
      paddingTop: 6,
      backgroundColor: white,
      borderWidth: 1,
      borderColor: lightGrey
    }
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor={ white } />
          <DeckView />
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
