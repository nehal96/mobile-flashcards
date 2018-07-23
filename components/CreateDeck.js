import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform,
  TextInput, KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { lightBlue } from '../utils/colors'

function SubmitButton({ onPress }) {
  return (
    <TouchableOpacity
      style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn }
      onPress={ onPress }>
        <Text style={ styles.submitBtnText }>SUBMIT</Text>
    </TouchableOpacity>
  )
}

submit = () => {

}

class CreateDeck extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.header }>
          Create Deck
        </Text>
        <KeyboardAvoidingView style={ styles.inputContainer } behavior='padding' enabled>
          <TextInput
            style={ styles.input }
            placeholder={ 'Deck Title' }
          />
          <SubmitButton onPress={ this.submit }/>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
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
  iosSubmitBtn: {
    backgroundColor: lightBlue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginTop: 15,
    marginBottom: 15
  },
  androidSubmitBtn: {
    backgroundColor: lightBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center'
  }
})

export default CreateDeck
