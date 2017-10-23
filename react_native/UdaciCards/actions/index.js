export const RECIEVE_DECKS = "RECIEVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export const INCREMENT_NUMBER_CORRECT = "INCREMENT_NUMBER_CORRECT";
export const SET_NUMBER_OF_QUESTIONS = "SET_NUMBER_OF_QUESTIONS";
export const RESET_QUIZ = "RESET_QUIZ";

export function recieveDecks(decks) {
	return {
		type: RECIEVE_DECKS,
		decks
	};
}

export function addDeck(title) {
	return {
		type: ADD_DECK,
		title
	};
}

export function addCard(title, card) {
	return {
		type: ADD_CARD,
		title,
		card
	};
}

export function incrementNumberCorrect() {
	return {
		type: INCREMENT_NUMBER_CORRECT
	};
}

export function setNumberOfQuestions(numberOfQuestions) {
	return {
		type: SET_NUMBER_OF_QUESTIONS,
		numberOfQuestions
	};
}

export function resetQuiz() {
	return {
		type: RESET_QUIZ
	};
}
