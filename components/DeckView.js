import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { grey } from '../utils/colors'

class DeckView extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>
          Deck
        </Text>
        <Text style={ styles.subHeader }>
          10 cards
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 42,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 24,
    color: grey,
    marginBottom: 10,
    textAlign: 'center'
  }
})

export default DeckView
