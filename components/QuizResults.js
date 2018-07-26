import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { white, grey, lightGrey } from '../utils/colors'

export default function QuizResults({ numCorrect, numIncorrect }) {
  const numQuestions = numCorrect + numIncorrect
  const percent = (numCorrect / numQuestions) * 100

  return(
    <View style={ [styles.container, { justifyContent: 'space-around'}] }>
      <Text style={ styles.header }>Quiz Results</Text>
      <Text style={{ fontSize: 26, textAlign: 'center' }}>
        You got: { percent.toFixed(1) }%
      </Text>
      <View>
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
  }
})
