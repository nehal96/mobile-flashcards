import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

class CreateDeck extends Component {
  render() {
    return(
      <View>
        <Text style={ styles.header }>
          Create Deck
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700'
  }
})

export default CreateDeck
