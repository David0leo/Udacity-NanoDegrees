import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Deck from "./Deck";
import SimpleButton from "./SimpleButton";
import { getDeck } from "../utils/api";

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
	}
});

function mapStateToProps(decks, { navigation }) {
	const { deck } = navigation.state.params;

	return {
		deck: decks[deck.title]
	};
}

export default connect(mapStateToProps)(DeckView);
