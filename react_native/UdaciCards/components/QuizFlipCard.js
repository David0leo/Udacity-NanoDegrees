import React from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";

import QuizCardFace from "./QuizCardFace";

// some flipping help from
// https://github.com/aprct/react-native-swipe-flip/blob/master/index.js

const interpolationBasis = {
	inputRange: [0, 1],
	outputRange: ["0deg", "360deg"]
};

class QuizFlipCard extends React.Component {
	state = {
		frontVisible: true,
		perspective: 1000,
		flipDuration: 500,
		flipEasing: Easing.out(Easing.ease),
		frontRotation: new Animated.Value(0),
		backRotation: new Animated.Value(0.5)
	};

	flipCard = () => {
		const {
			frontRotation,
			backRotation,
			frontVisible,
			flipDuration
		} = this.state;
		let newFrontRotation = 0;
		let newBackRotation = 0;
		let newFrontVisible = true;

		if (frontVisible) {
			// flip so front not visible
			newFrontRotation = -0.5;
			newBackRotation = 0;
			newFrontVisible = false;
		} else {
			// flip so front visible
			newFrontRotation = 0;
			newBackRotation = 0.5;
			newFrontVisible = true;
		}

		Animated.parallel([
			Animated.timing(frontRotation, {
				toValue: newFrontRotation,
				duration: flipDuration
			}),
			Animated.timing(backRotation, {
				toValue: newBackRotation,
				duration: flipDuration
			})
		]).start(this.setState({ frontVisible: newFrontVisible }));
	};

	markCorrect = () => {
    if (!this.state.frontVisible) {
      this.flipCard()
      setTimeout(() => {
        this.props.onPressCorrect()
      }, this.state.flipDuration)
    } else {
      this.props.onPressCorrect()
    }
  };

	markIncorrect = () => {
    if (!this.state.frontVisible) {
      this.flipCard()
      setTimeout(() => {
        this.props.onPressIncorrect()
      }, this.state.flipDuration)
    } else {
      this.props.onPressIncorrect()
    }
  };

	render() {
		const frontRotation = this.state.frontRotation.interpolate(
			interpolationBasis
		);
		const backRotation = this.state.backRotation.interpolate(
			interpolationBasis
		);
		const { question, answer } = this.props.card;
		const { frontVisible, perspective } = this.state;

		return (
			<View style={{ flex: 1 }}>
				{/* Front */}
				<Animated.View
					style={[
						styles.card,
						styles.flipView,
						{ zIndex: frontVisible ? 1 : 0 },
						{
							transform: [
								{ perspective: perspective },
								{ rotateY: frontRotation }
							]
						}
					]}
				>
					<QuizCardFace
						title={question}
						header="Q:"
						onFlip={this.flipCard}
						frontVisible={frontVisible}
						onPressCorrect={this.markCorrect}
						onPressIncorrect={this.markIncorrect}
						isVisible={frontVisible}
					/>
				</Animated.View>
				{/* Back */}
				<Animated.View
					style={[
						styles.card,
						styles.flipView,
						{
							transform: [
								{ perspective: perspective },
								{ rotateY: backRotation }
							]
						}
					]}
				>
					<QuizCardFace
						title={answer}
						header="A:"
						onFlip={this.flipCard}
						frontVisible={frontVisible}
						onPressCorrect={this.markCorrect}
						onPressIncorrect={this.markIncorrect}
						isVisible={!frontVisible}
					/>
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		margin: 50,
		backgroundColor: "white",
		borderRadius: 2,
		shadowRadius: 3,
		shadowOpacity: 0.8,
		elevation: 2,
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	flipView: {
		position: "absolute",
		backfaceVisibility: "hidden",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
});

export default QuizFlipCard;
