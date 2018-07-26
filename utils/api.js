import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, setDummyData } from './_DATA'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setDummyData)
}

export function submitDeck({ key, entry }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}
