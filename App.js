import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Feather, Entypo } from '@expo/vector-icons'
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
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

const StackNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      // Temporary solution to bug that puts title on top of back button on Android
      headerTitle: Platform.OS === 'ios' ? 'Deck' : null,
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white
      },
      headerTitleStyle: {
        fontSize: 22,
        paddingLeft: Platform.OS === 'ios' ? 0 : 40
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white
      },
      headerTitleStyle: {
        fontSize: 22,
        // Hack for bug that overlaps title and back button
        paddingLeft: Platform.OS === 'ios' ? 0 : 40
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white
      },
      headerTitleStyle: {
        fontSize: 22,
        // Hack for bug that overlaps title and back button
        paddingLeft: Platform.OS === 'ios' ? 0 : 40
      }
    }
  }
}, {
  cardStyle: {
    shadowColor: 'transparent'
  }
})

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator,
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
  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={ createStore(reducer) }>
        <View style={ styles.container }>
          <FlashcardsStatusBar backgroundColor={ white } />
          <MainNavigator />
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
