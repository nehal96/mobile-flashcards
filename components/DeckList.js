import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    console.log(this.props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>Decks</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default DeckList
