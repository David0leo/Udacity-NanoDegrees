import React from "react";
import { StyleSheet, View, Text, TextInput, Platform } from "react-native";
import SimpleButton from "./SimpleButton";
import { saveDeckTitle } from "../utils/api";

export default class NewDeckView extends React.Component {
	state = {
		newDeckTitle: ""
	};

	submitDeck = () => {
		if (this.state.newDeckTitle !== "") {
			saveDeckTitle({ title: this.state.newDeckTitle });
    }
    this.props.navigation.navigate(
      'Home'
    )
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>What is the title of your new deck?</Text>
				<TextInput
					style={styles.textInput}
					placeholder="New Deck Title"
					onChangeText={text => this.setState({ newDeckTitle: text })}
          underlineColorAndroid={'black'}
          selectionColor={'black'}
				/>
				<SimpleButton
					style={styles.simpleButton}
					buttonText="Submit"
					onPress={this.submitDeck}
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
		borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
		textAlign: "center"
	},
	simpleButton: {
		// flex: 1
	}
});
