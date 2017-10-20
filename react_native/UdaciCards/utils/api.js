import { AsyncStorage } from "react-native";

const API_STORAGE_KEY = "UdaciCards:david0leo";

// getDecks: return all the decks along with titles questions and answers
export async function getDecks() {
	try {
		const value = await AsyncStorage.getItem(API_STORAGE_KEY).then(response => {
			return JSON.parse(response);
		});
		// console.log(value)
		return value;
	} catch (error) {
		console.warn("Error loading decks");
	}
}

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck({ id }) {
	return AsyncStorage.getItem(API_STORAGE_KEY)
		.then(response => {
			return JSON.parse(response);
		})
		.then(data => {
			return data[id];
		});
}
// saveDeckTitle: take in a single title argument and add it to the decks
export function saveDeckTitle({ title }) {
	return AsyncStorage.mergeItem(
		API_STORAGE_KEY,
		JSON.stringify({
			[title]: {
				title,
				questions: []
			}
		})
	);
}
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
export function addCardToDeck({ title, card }) {
	return AsyncStorage.getItem(API_STORAGE_KEY).then(response => {
		const decks = JSON.parse(response);
		let questions = decks[title].questions;
		questions.push(card);
		AsyncStorage.mergeItem(API_STORAGE_KEY,
			JSON.stringify({
				[title]: {
					title,
					questions
				}
			})
		);
	});
	// return AsyncStorage.mergeItem(
	// 	API_STORAGE_KEY,
	// 	JSON.stringify({
	// 		[title]: {
	// 			questions: [card]
	// 		}
	// 	})
	// );
}
