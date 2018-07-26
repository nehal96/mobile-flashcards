import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import TextButton from './TextButton'
import { white, grey, lightGrey, lightGreen, lightBlue } from '../utils/colors'

export default function QuizResults({ numCorrect, numIncorrect, restartQuiz, backToDeck }) {
  const numQuestions = numCorrect + numIncorrect
  const percent = (numCorrect / numQuestions) * 100

  return(
    <View style={ [styles.container, { justifyContent: 'space-around'}] }>
      <Text style={ styles.header }>Quiz Results</Text>
      <View style={{ justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 28, textAlign: 'center', marginBottom: 20 }}>
          You got: { percent.toFixed(1) }%
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.resultsDetails }>
              Number correct:
          </Text>
          <Text style={ styles.resultsDetails }>
              { numCorrect } out of { numQuestions }
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.resultsDetails }>
            Number wrong:
          </Text>
          <Text style={ styles.resultsDetails }>
            { numIncorrect } out of { numQuestions }
          </Text>
        </View>
      </View>
      <View >
          <TextButton
            style={ [styles.button, { backgroundColor: lightGreen }]}
            onPress={ restartQuiz }>
              Restart Quiz
          </TextButton>
          <TextButton
            style={ [styles.button, { backgroundColor: lightBlue }]}
            onPress={ backToDeck }>
              Back to Deck
          </TextButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? white : lightGrey
  },
  header: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20
  },
  resultsDetails: {
    fontSize: 20,
    textAlign: 'center',
    color: grey
  },
  button: {
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  }
})
