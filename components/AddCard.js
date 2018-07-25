import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
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
    // do stuff
  }

  render() {
    const { question, answer } = this.state
    console.log(question)
    console.log(answer)

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

export default AddCard
