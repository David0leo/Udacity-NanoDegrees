import React from "react";
import { StyleSheet, View, Text, TextInput, Platform } from "react-native";
import { connect } from "react-redux";

import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";
import SimpleButton from "./SimpleButton";
import { mdBlue700 } from "../utils/colors";

class NewQuestionView extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params;

		return {
			title: "Add Card"
		};
	};

	state = {
		question: "",
		answer: "",
		displayWarning: false
	};

	submitQuestion = () => {
		const { question, answer } = this.state;
		const { deck, addCard } = this.props;

		if (question !== "" && answer !== "") {
			addCardToDeck({ title: deck.title, card: { question, answer } });
			addCard(deck.title, { question, answer });
			this.props.navigation.goBack();
		} else {
			this.setState({ displayWarning: true });
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.qaContainer}>
					<Text style={styles.qaText}>Q:</Text>
					<TextInput
						style={styles.textInput}
						placeholder="Enter Question"
						onChangeText={text => this.setState({ question: text })}
						underlineColorAndroid={"black"}
						selectionColor={"black"}
					/>
				</View>
				<View style={styles.qaContainer}>
					<Text style={styles.qaText}>A:</Text>
					<TextInput
						style={styles.textInput}
						placeholder="Enter Answer"
						onChangeText={text => this.setState({ answer: text })}
						underlineColorAndroid={"black"}
						selectionColor={"black"}
					/>
				</View>
				<SimpleButton
					buttonText="Submit"
					onPress={this.submitQuestion}
					style={{ backgroundColor: mdBlue700 }}
					textColor={"white"}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	qaContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	qaText: {
		fontSize: 20
	},
	textInput: {
		marginTop: 20,
		marginBottom: 20,
		width: 300,
		height: 50,
		borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
		textAlign: "center"
	}
});

function mapStateToProps({ decks }, { navigation }) {
	const { deck } = navigation.state.params;
	return {
		deck: decks[deck.title]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addCard: (title, card) => dispatch(addCard(title, card))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView);
