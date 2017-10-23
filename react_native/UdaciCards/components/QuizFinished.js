import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import SimpleButton from "./SimpleButton";
import { mdOrange700, mdRed500, mdGreen500, mdBlue700 } from "../utils/colors";

const scoreColor = (numberCorrect, numberOfQuestions) => {
	if (numberCorrect === numberOfQuestions) {
		return mdGreen500;
	} else if (numberCorrect < numberOfQuestions / 2) {
		return mdRed500;
	} else {
		return "black";
	}
};

class QuizFinished extends React.Component {

	render() {
    const { numberOfQuestions, numberCorrect, restartCallback, goBackCallback } = this.props
		return (
			<View style={[styles.container, styles.center]}>
				<Text style={{ fontSize: 40 }}>Quiz Complete!</Text>
				<View style={{ flexDirection: "row" }}>
					<Text style={{ fontSize: 30 }}>Your Score: </Text>
					<Text
						style={{
							fontSize: 30,
							color: scoreColor(numberCorrect, numberOfQuestions)
						}}
					>
						{numberCorrect}
					</Text>
					<Text style={{ fontSize: 30 }}>/{numberOfQuestions}</Text>
				</View>
				<SimpleButton
					buttonText={"Restart Quiz"}
					onPress={restartCallback}
					style={{ backgroundColor: mdOrange700 }}
					textColor={"white"}
				/>
        <SimpleButton
          buttonText={"Back To Deck"}
          onPress={goBackCallback}
          style={{backgroundColor: mdBlue700}}
          textColor={"white"}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	center: {
		justifyContent: "center",
		alignItems: "center"
	}
});

function mapStateToProps({ quiz }) {
	return {
		numberCorrect: quiz.numberCorrect,
		numberOfQuestions: quiz.numberOfQuestions
	};
}

export default connect(mapStateToProps)(QuizFinished);
