import React from "react";
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, Platform } from "react-native";
import { connect } from "react-redux";

import SimpleButton from "./SimpleButton";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { mdBlue700 } from "../utils/colors";

class NewDeckView extends React.Component {
	state = {
		newDeckTitle: ""
	};

	submitDeck = () => {
		if (this.state.newDeckTitle !== "") {
			// api call to save new deck
			saveDeckTitle({ title: this.state.newDeckTitle });

			// add deck to redux store
			this.props.dispatch(addDeck(this.state.newDeckTitle));
		}
		this.props.navigation.navigate("DeckView", {
			deck: {
				title: this.state.newDeckTitle,
				questions: []
			}
		});
	};

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<Text style={styles.title}>What is the title of your new deck?</Text>
				<TextInput
					style={styles.textInput}
					placeholder="New Deck Title"
					onChangeText={text => this.setState({ newDeckTitle: text })}
					underlineColorAndroid={"black"}
					selectionColor={"black"}
				/>
				<SimpleButton
					style={styles.simpleButton}
					buttonText="Submit"
					onPress={this.submitDeck}
					textColor={"white"}
				/>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		// flex: 5,
		fontSize: 32,
		textAlign: "center"
	},
	textInput: {
		// flex: 1,
		marginTop: 20,
		marginBottom: 20,
		width: 200,
		height: 50,
		borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
		textAlign: "center"
	},
	simpleButton: {
		backgroundColor: mdBlue700
	}
});

export default connect()(NewDeckView);
