import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { grey, white } from '../utils/colors'

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={ onPress } style={ [styles.btn, style] }>
      <Text style={ styles.btnText }>{ children }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    height: 50
  },
  btnText: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif',
    fontSize: 22,
    fontWeight: '600',
    color: white
  }
})
