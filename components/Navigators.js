import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Feather, Entypo } from '@expo/vector-icons'
import DeckList from './DeckList'
import DeckView from './DeckView'
import AddCard from './AddCard'
import Quiz from './Quiz'
import CreateDeck from './CreateDeck'
import { white, lightGrey, grey, blue, lightBlue } from '../utils/colors'


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

export const MainNavigatoriOS = createBottomTabNavigator({
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

export const MainNavigatorAndroid = createMaterialBottomTabNavigator({
  Home: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Feather name='home' size={ 25 } color={ tintColor } />,
      tabBarColor: blue
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={ 25 } color={ tintColor } />,
      tabBarColor: blue
    }
  }
}, {
  shifting: true,
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    inactiveTintColor: lightGrey,
    activeTintColor: white,
    style: {
      height: 50,
      paddingTop: 6,
      backgroundColor: blue,
      borderWidth: 1,
      borderColor: lightGrey
    }
  }
})
