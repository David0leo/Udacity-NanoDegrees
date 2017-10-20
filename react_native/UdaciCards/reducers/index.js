import { ADD_DECK, ADD_CARD_TO_DECK } from '../actions'

export default function decks(state={}, action){
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]:{
          ...state[action.title],
          questions: [...state[action.title][questions], action.card]
        }
      }
  }
}