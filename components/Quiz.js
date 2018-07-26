import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import TextButton from './TextButton'
import { white, lightGrey, lightGreen, red, lightBlue } from '../utils/colors'

class Quiz extends Component {
  render() {
    return(
      <View style={ styles.container}>
        <View style={ styles.progressContainer }>
          <Text style={ styles.progress }>1/5</Text>
        </View>
        <View style={ styles.quizContainer }>
          <View style={{ justifyContent: 'center' }}>
            <Text style={ styles.question }>
              Does React Native work with Android?
            </Text>
            <TextButton
              style={ [styles.answerBtn, { backgroundColor: lightBlue, justifyContent: 'center' }] }>
                View Answer
            </TextButton>
          </View>
          <View style={ styles.buttonContainer }>
            <TextButton
              style={ [styles.optionBtn, { backgroundColor: lightGreen }] }>
              Correct
            </TextButton>
            <TextButton
              style={ [styles.optionBtn, { backgroundColor: red }] }>
              Incorrect
            </TextButton>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey
  },
  progressContainer: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    height: 50,
    // backgroundColor: 'orange'
  },
  progress: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 22,
    fontWeight: '600'
  },
  quizContainer: {
    flex: 5,
    justifyContent: 'space-around',
    margin: 20,
    // backgroundColor: 'lightgreen'
  },
  question: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  answerBtn: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    justifyContent: 'center',
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15
  },
  optionBtn: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginBottom: 15,
    marginTop: 20,
    width: '45%'
  }
})

export default Quiz
