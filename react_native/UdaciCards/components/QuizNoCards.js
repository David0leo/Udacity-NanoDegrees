import React from "react";
import { StyleSheet, View, Text } from "react-native";

const QuizNoCards = () => {
	return (
		<View style={[styles.container, styles.center]}>
			<Text style={styles.noCardsText}>
				This deck has no cards. Press back and add a card to start a quiz.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	center: {
		justifyContent: "center",
		alignItems: "center"
	},
	noCardsText: {
		textAlign: "center",
		fontSize: 32,
		padding: 20
	}
});

export default QuizNoCards;
