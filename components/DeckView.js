import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, grey, lightBlue, lightGrey, lightGreen, pastelYellow } from '../utils/colors'
import TextButton from './TextButton'

class DeckView extends Component {
  toStartQuiz = () => {
    // do stuff
  }

  toAddCard = () => {
    const { title, navigation } = this.props

    navigation.navigate('AddCard', { title })
  }

  render() {
    const { title, numCards } = this.props

    return (
      <View style={ styles.container }>
        <View style= {styles.deckCard }>
          <Text style={ styles.header }>
            { title }
          </Text>
          <Text style={ styles.subHeader }>
            { numCards } cards
          </Text>
        </View>
        <View>
          <TextButton
            style={ [styles.button, { backgroundColor: lightGreen }] }
            onPress={ this.toStartQuiz }>
              Start Quiz
          </TextButton>
          <TextButton
            style={ [styles.button, { backgroundColor: lightBlue }] }
            onPress={ this.toAddCard }>
              Add Card
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey,
    justifyContent: 'space-around'
  },
  deckCard: {
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
  },
  button: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  }
})

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params
  const numCards = decks[title].questions.length

  return {
    title,
    numCards
  }
}

export default connect(mapStateToProps)(DeckView)
