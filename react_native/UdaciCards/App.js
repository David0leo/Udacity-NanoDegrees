import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	Platform
} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Constants } from "expo";
import { Entypo } from "@expo/vector-icons";

// import './ReactotronConfig'
import DeckListView from "./components/DeckListView";
import DeckView from "./components/DeckView";
import NewDeckView from "./components/NewDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import reducer from "./reducers";

import { primaryColor, secondaryColor } from "./utils/colors";

function MainStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
}

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
				backgroundColor: primaryColor,
			},
			headerTitleStyle: {
				// alignSelf: 'flex-start',
				// left: Platform.OS === 'ios' ? -50 : -15,
				// fontSize: 20,
			}
		}
	},
	DeckView: {
		screen: DeckView,
		navigationOptions: {
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTitleStyle: {
				// alignSelf: 'flex-start',
				// left: Platform.OS === 'ios' ? -50 : -15,
				// fontSize: 20,
			}
		}
	}
});

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{ flex: 1 }}>
					<MainStatusBar
						backgroundColor={secondaryColor}
						barStyle={"light-content"}
					/>
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
		// backgroundColor: 'blue',"
	}
});
