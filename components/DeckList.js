import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import DeckCard from './DeckCard'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    // Add dummy data to store
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    const { decks } = this.props

    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>Decks</Text>
        { Object.keys(decks).map((deckName) => (
          <DeckCard
            key={ deckName }
            title={ decks[deckName].title }
            numCards={ decks[deckName].questions.length }
          />
        ))}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
