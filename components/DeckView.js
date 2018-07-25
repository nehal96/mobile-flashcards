import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, grey, lightBlue, blue, lightGrey } from '../utils/colors'

class DeckView extends Component {

  render() {
    const { title, numCards } = this.props

    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>
          { title }
        </Text>
        <Text style={ styles.subHeader }>
          { numCards } cards
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey
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

function mapStateToProps(decks, { navigation }) {
  const { title, numCards } = navigation.state.params

  return {
    title,
    numCards
  }
}

export default connect(mapStateToProps)(DeckView)
