import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Deck from "./Deck";
import SimpleButton from "./SimpleButton";
import { getDeck } from "../utils/api";
import { mdOrange700, mdBlue700 } from '../utils/colors';

class DeckView extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: ``,
			headerBackTitle: "Back"
		};
	};

	addCard = () => {
		//navigate to new question view
		const { deck } = this.props;
		this.props.navigation.navigate("NewQuestionView", {
			deck
		});
	};

	startQuiz = () => {
		const { deck } = this.props;
		this.props.navigation.navigate("QuizView", {
			deck
		});
	};

	render() {
		const { deck } = this.props;

		return (
			<View style={styles.container}>
				<Deck deck={deck} style={{ flex: 6, marginBottom: 20 }} />
				<SimpleButton
					onPress={this.addCard}
					buttonText={"Add Card"}
					style={[styles.button, { backgroundColor: mdBlue700 }]}
					textColor={'white'}
				/>
				<SimpleButton
					onPress={this.startQuiz}
					buttonText={"Start Quiz"}
					style={[styles.button, { backgroundColor: mdOrange700 }]}
					textColor={'white'}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		flex: 1, 
		marginBottom: 20
	}
});

function mapStateToProps(decks, { navigation }) {
	const { deck } = navigation.state.params;

	return {
		deck: decks[deck.title]
	};
}

export default connect(mapStateToProps)(DeckView);
