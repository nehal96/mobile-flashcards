import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { gray, pastelYellow } from '../utils/colors'

class DeckCard extends Component {
  render() {
    const { title, numCards } = this.props

    return (
      <View style={ styles.card }>
        <Text style={ styles.cardHeader }>
          { title }
        </Text>
        <Text style={ styles.cardSubHeader }>
          { numCards } cards
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
    marginTop: 20,
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

function mapStateToProps(decks, { title, numCards }) {
  return {
    title,
    numCards
  }
}

export default connect(mapStateToProps)(DeckCard)
