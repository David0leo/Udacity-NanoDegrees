import { AsyncStorage } from 'react-native'

const API_STORAGE_KEY = 'UdaciCards:david0leo'

// getDecks: return all the decks along with titles questions and answers
export function getDecks() {
  console.log(AsyncStorage.getItem(API_STORAGE_KEY).then((results) => JSON.parse(results)))
  return AsyncStorage.getItem(API_STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck({ id }) {
  return AsyncStorage.getItem()
}
// saveDeckTitle: take in a single title argument and add it to the decks
export function saveDeckTitle({ title }) {
  return AsyncStorage.setItem(API_STORAGE_KEY, JSON.stringify({
    title: title,
    questions: [] 
  }))
}
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
export function addCardToDeck({ title, card }) {
  
}