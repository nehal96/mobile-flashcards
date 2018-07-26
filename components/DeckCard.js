import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { grey, pastelYellow } from '../utils/colors'

class DeckCard extends Component {
  handleRoute = () => {
    const { numCards, title, navigation } = this.props

    navigation.navigate('DeckView', {
      title,
      numCards
    })
  }

  render() {
    const { title, numCards } = this.props

    return (
      <View style={ styles.card }>
        <TouchableOpacity onPress={ this.handleRoute }>
          <Text style={ styles.cardHeader }>
            { title }
          </Text>
          <Text style={ styles.cardSubHeader }>
            { numCards } cards
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: pastelYellow,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
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
    color: grey,
    marginBottom: 10,
    textAlign: 'center'
  }
})

function mapStateToProps(decks, { title, navigation }) {
  const numCards = decks[title].questions.length
  
  return {
    title,
    numCards,
    navigation
  }
}

export default connect(mapStateToProps)(DeckCard)
