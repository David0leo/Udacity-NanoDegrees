import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Deck from "./Deck";
import SimpleButton from "./SimpleButton";
import { getDeck } from "../utils/api";

export default class DeckView extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: ``,
			headerBackTitle: "Back"
		};
	};

	state = {
		deck: {
			title: "",
			questions: []
		}
	};

	componentDidMount() {
		const { deck } = this.props.navigation.state.params;

		this.refresh(deck.title);
	}

	refresh = title => {
		getDeck({ id: title })
			.then(deck => this.setState({ deck }))
			.then(() => console.log("yes"));
	};

	addQuestionCallback = question => {
    console.log(question)
    console.log(this.state.questions)
    this.setState(state => {
      return {
        ...state,
        ['deck']: {
          ...state.deck,
          'questions': [...state.deck.questions, question]
        }
        
      }})
  };

	addCard = () => {
		//navigate to new question view
		const { deck } = this.state;
		this.props.navigation.navigate("NewQuestionView", {
			deck,
			addQuestionCallback: this.addQuestionCallback
		});
	};

	startQuiz() {}

	render() {
		const { deck } = this.state;

		console.log(this.state);

		return (
			<View style={styles.container}>
				<Deck deck={deck} style={{ flex: 6 }} />
				<SimpleButton
					onPress={this.addCard}
					buttonText={"Add Card"}
					style={{ flex: 1, marginTop: 40 }}
				/>
				<SimpleButton
					onPress={this.startQuiz}
					buttonText={"Start Quiz"}
					style={{ flex: 1, marginBottom: 40 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
		// justifyContent: 'center',
		// alignItems: 'center'
	}
});
