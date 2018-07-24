import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { gray, pastelYellow } from '../utils/colors'

class DeckCard extends Component {
  render() {
    return (
      <View style={ styles.card }>
        <Text style={ styles.cardHeader }>
          Deck Title
        </Text>
        <Text style={ styles.cardSubHeader }>
          10 cards
        </Text>
      </View>
    )
  }
}

const styles = {
  card: {
    backgroundColor: pastelYellow,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  cardHeader: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15
  },
  cardSubHeader: {
    fontSize: 20,
    color: gray,
    marginBottom: 10,
    textAlign: 'center'
  }
}

export default DeckCard
