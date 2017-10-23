import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Entypo } from "@expo/vector-icons";

import DeckListView from "./components/DeckListView";
import NewDeckView from "./components/NewDeckView";
import QuizView from "./components/QuizView";
import NewQuestionView from "./components/NewQuestionView";
import DeckView from "./components/DeckView";
import { primaryColor } from "./utils/colors";

const Tabs = TabNavigator(
	{
		DeckListView: {
			screen: DeckListView,
			navigationOptions: {
				tabBarLabel: "Decks",
				tabBarIcon: ({ tintColor }) => (
					<Entypo name="document-landscape" size={30} color={tintColor} />
				)
			}
		},
		NewDeckView: {
			screen: NewDeckView,
			navigationOptions: {
				tabBarLabel: "New Deck",
				tabBarIcon: ({ tintColor }) => (
					<Entypo name="plus" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		navigationOptions: {
			header: null
		},
		tabBarOptions: {
			activeTintColor: "white",
			inactiveTintColor: "rgba(255, 255, 255, 0.5)",
			style: {
				height: 50,
				paddingBottom: 3,
				backgroundColor: primaryColor,
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowRadius: 6,
				shadowOpacity: 1
			}
		}
	}
);

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			headerBackTitle: "Decks"
		}
	},
	QuizView: {
		screen: QuizView,
		navigationOptions: {
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: primaryColor
			}
		}
	},
	NewQuestionView: {
		screen: NewQuestionView,
		navigationOptions: {
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: primaryColor
			}
		}
	},
	DeckView: {
		screen: DeckView,
		navigationOptions: {
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: primaryColor
			}
		}
	}
});

export default MainNavigator;
