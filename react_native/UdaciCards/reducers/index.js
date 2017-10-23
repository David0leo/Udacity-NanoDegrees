import { combineReducers } from 'redux';
import {
	RECIEVE_DECKS,
	ADD_DECK,
	ADD_CARD,
	INCREMENT_NUMBER_CORRECT,
	SET_NUMBER_OF_QUESTIONS,
	RESET_QUIZ
} from "../actions";

const quizInitialState = {
	numberCorrect: 0,
	numberOfQuestions: 0
};

function quiz(state = quizInitialState, action) {
	switch (action.type) {
		case INCREMENT_NUMBER_CORRECT:
			return {
				...state,
				numberCorrect: state.numberCorrect + 1
			};
		case SET_NUMBER_OF_QUESTIONS:
			return {
				...state,
				numberOfQuestions: action.numberOfQuestions
			};
		case RESET_QUIZ:
			return {
				...state,
				numberCorrect: 0
			};
		default:
			return state;
	}
}

function decks(state = {}, action) {
	switch (action.type) {
		case RECIEVE_DECKS:
			return action.decks;
		case ADD_DECK:
			return {
				...state,
				[action.title]: {
					title: action.title,
					questions: []
				}
			};
		case ADD_CARD:
			return {
				...state,
				[action.title]: {
					...state[action.title],
					questions: [...state[action.title]["questions"], action.card]
				}
			};
		default:
			return state;
	}
}

export default combineReducers({
	quiz,
	decks
});
