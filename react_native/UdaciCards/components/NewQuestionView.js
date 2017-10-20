import React from "react";
import { StyleSheet, View, Text, TextInput, Platform } from "react-native";
import { addCardToDeck } from "../utils/api";
import SimpleButton from './SimpleButton';

export default class NewQuestionView extends React.Component {
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
		const { deck, addQuestionCallback } = this.props.navigation.state.params;

		if (question !== "" && answer !== "") {
      addCardToDeck({ title: deck.title, card: { question, answer } }).then(addQuestionCallback({question, answer}))
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
        <SimpleButton buttonText="Submit" onPress={this.submitQuestion}/>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  qaText: {
    fontSize: 20,

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
