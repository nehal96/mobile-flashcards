import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
import TextButton from './TextButton'
import { lightBlue } from '../utils/colors'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestion = (question) => {
    // do stuff
  }

  handleAnswer = (answer) => {
    // do stuff
  }

  addCard = () => {
    // do stuff
  }

  render() {
    const { question, answer } = this.state

    return(
      <View style={ styles.container }>
        <KeyboardAvoidingView style={ styles.inputContainer } behavior='padding' enabled>
          <View>
            <TextInput
              style={ styles.input }
              placeholder={ 'Question' }
              value={ question }
              onChangeText={ this.handleQuestion }
            />
            <TextInput
              style={ styles.input }
              placeholder={ 'Answer' }
              value={ answer }
              onChangeText={ this.handleAnswer }
            />
          </View>
          <TextButton
            style={ [styles.button, { backgroundColor: lightBlue }] }
            onPress={ this.addCard }>
            Add Card
          </TextButton>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 20
  },
  input: {
    fontSize: 22,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15
  },
  button: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  }
})

export default AddCard
