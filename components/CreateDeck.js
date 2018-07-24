import React, { Component } from 'react'
import {
  View, Text, StyleSheet, Platform,
  TextInput, KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'
import { lightBlue, white, lightGrey } from '../utils/colors'

function SubmitButton({ onPress }) {
  return (
    <TouchableOpacity
      style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn }
      onPress={ onPress }>
        <Text style={ styles.submitBtnText }>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class CreateDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (title) => {
    this.setState(() => ({ title }))
  }

  submit = () => {
    const { dispatch } = this.props
    const { title } = this.state
    const key = this.state.title
    const entry = {
      title,
      questions: []
    }

    // Add deck to store
    dispatch(addDeck({
      [key]: entry
    }))

    // Reset state
    this.setState(() => ({
      title: ''
    }))

    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Home'
    }))
  }

  render() {
    const value = this.state.title

    return(
      <View style={ styles.container }>
        <Text style={ styles.header }>
          Create Deck
        </Text>
        <KeyboardAvoidingView style={ styles.inputContainer } behavior='padding' enabled>
          <TextInput
            style={ styles.input }
            placeholder={ 'Deck Title' }
            value={ value }
            onChangeText={ this.handleChange }
          />
        <SubmitButton onPress={ this.submit } />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 20,
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

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CreateDeck)
