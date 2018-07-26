import React, { Component } from 'react'
import {
  View, Text, TextInput, KeyboardAvoidingView,
  StyleSheet, Platform, Alert, Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../actions'
import TextButton from './TextButton'
import { white, lightBlue, lightGrey } from '../utils/colors'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestion = (question) => {
    this.setState(() => ({ question }))
  }

  handleAnswer = (answer) => {
    this.setState(() => ({ answer }))
  }

  addCard = () => {
    const { dispatch, title } = this.props
    const { question, answer } = this.state

    // Input validation for question and answer
    if (question.length === 0 && answer.length === 0) {
      Alert.alert(
        "Empty Question and Answer Field",
        "You haven't entered a question or answer",
        [
          { text: 'OK' }
        ]
      )
    } else if (question.length === 0) {
      Alert.alert(
        "Empty Question Field",
        "You haven't entered a question",
        [
          { text: 'OK' }
        ]
      )
    } else if (answer.length === 0) {
      Alert.alert(
        "Empty Answer Field",
        "You haven't entered an answer",
        [
          { text: 'OK' }
        ]
      )
    } else {
      const card = {
        question,
        answer
      }

      // Add card to deck in store
      dispatch(addCardToDeck(title, card))

      // Reset state
      this.setState(() => ({
        question: '',
        answer: ''
      }))

      // Go back to DeckView screen
      this.goBack()
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { question, answer } = this.state

    return(
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss } accessible={ false }>
        <View style={ styles.container }>
          <KeyboardAvoidingView style={ styles.inputContainer } behavior='padding' enabled>
            <View>
              <TextInput
                style={ styles.input }
                placeholder={ 'Question' }
                value={ question }
                onChangeText={ this.handleQuestion }
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 100 }
                onSubmitEditing={ Keyboard.dismiss }
              />
              <TextInput
                style={ styles.input }
                placeholder={ 'Answer' }
                value={ answer }
                onChangeText={ this.handleAnswer }
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 100 }
                onSubmitEditing={ Keyboard.dismiss }
              />
            </View>
            <TextButton
              style={ [styles.button, { backgroundColor: lightBlue }] }
              onPress={ this.addCard }>
              Add Card
            </TextButton>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey,
    justifyContent: 'space-around',
  },
  input: {
    fontSize: 22,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20
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

  return {
    title
  }
}

export default connect(mapStateToProps)(AddCard)
