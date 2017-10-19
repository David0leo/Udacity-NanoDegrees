import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	Platform
} from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Constants } from 'expo';

import DeckListView from "./components/DeckListView";
import NewDeck from "./components/NewDeck";
import DeckView from './components/DeckView';
import NewDeckView from './components/NewDeckView';
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView';

import { primaryColor, secondaryColor } from './utils/colors';


function MainStatusBar({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}></StatusBar>
    </View>
  )
}

const Tabs = TabNavigator(
	{
		DeckList: {
			screen: DeckListView,
			navigationOptions: {
				tabBarLabel: "Decks"
				//tabBarIcon: some decks icon
			}
		},
		NewDeck: {
			screen: NewDeck,
			navigationOptions: {
				tabBarLabel: "New Deck"
				//tabBarIcon: probably some plus icon
			}
		}
	},
	{
		navigationOptions: {
			header: null
		},
		tabBarOptions: {
			activeTintColor: "white",
			style: {
				height: 50,
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
		screen: Tabs
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple'
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
				backgroundColor: 'purple',
				paddingTop: 20,
				paddingBottom: 20
			},
			headerTitleStyle: {
				alignSelf: 'flex-start',
				left: Platform.OS === 'ios' ? -50 : -15,
				fontSize: 20,
			},
			title: 'Decks'
    }
  }
});

export default class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<MainStatusBar backgroundColor={secondaryColor} barStyle={"light-content"}></MainStatusBar>
				<MainNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'blue',"
	}
});
