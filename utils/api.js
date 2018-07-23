import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, setDummyData } from './_DATA'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setDummyData)
}
