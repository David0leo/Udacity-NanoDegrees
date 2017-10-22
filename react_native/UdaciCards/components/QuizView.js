import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Platform,
	Animated,
	Easing
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SimpleButton from "./SimpleButton";

// some flipping help from
// https://github.com/aprct/react-native-swipe-flip/blob/master/index.js
function CardFace({
	title,
	header,
	onFlip,
	frontVisible,
	onPressCorrect,
	onPressIncorrect
}) {
	return (
		<View style={{ flex: 1 }}>
			<SimpleButton
				style={styles.flipButton}
				buttonText={frontVisible ? "Answer" : "Question"}
				onPress={onFlip}
				icon={
					<MaterialCommunityIcons name="rotate-3d" size={30} color={"black"} />
				}
				textColor={"black"}
			/>

			<View style={styles.center}>
				<Text style={styles.headerText}>{header}</Text>
				<Text style={styles.titleText}> {title} </Text>
			</View>
			<SimpleButton
				onPress={onPressCorrect}
				style={[styles.button, { backgroundColor: "green" }]}
				buttonText={"Correct"}
				textColor={"white"}
			/>
			<SimpleButton
				onPress={onPressIncorrect}
				style={[styles.button, { backgroundColor: "red" }]}
				buttonText={"Incorrect"}
				textColor={"white"}
			/>
		</View>
	);
}

const interpolationBasis = {
	inputRange: [0, 1],
	outputRange: ["0deg", "360deg"]
};

class QuizView extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params;
		return {
			headerTitle: deck.title,
			headerBackTitle: "Back"
		};
	};

	state = {
		quizFinished: false,
		hasQuestions: false,
		currentCardIndex: 0,
		numberCards: 0,
		currentCard: {
			question: "",
			answer: ""
		},
		numCorrect: 0,
		numIncorrect: 0,
		frontVisible: true,
		perspective: 1000,
		flipDuration: 500,
		flipEasing: Easing.out(Easing.ease),
		frontRotation: new Animated.Value(0),
		backRotation: new Animated.Value(0.5)
	};

	componentDidMount() {
		this.restart();
	}

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
		this.setState((prevState, props) => {
			return {
				numCorrect: prevState.numCorrect + 1
			};
		});
		this.nextCard();
	};

	markIncorrect = () => {
		this.setState((prevState, props) => {
			return {
				numIncorrect: prevState.numIncorrect + 1
			};
		});
		this.nextCard();
	};

	nextCard = () => {
		if (!this.state.frontVisible) {
			this.flipCard();
		}
		setTimeout(() => {
			const { deck } = this.props.navigation.state.params;
			if (this.state.currentCardIndex < this.state.numberCards - 1) {
				this.setState((prevState, props) => {
					return {
						currentCardIndex: prevState.currentCardIndex + 1,
						currentCard: deck.questions[prevState.currentCardIndex + 1]
					};
				});
			} else {
				this.setState({
					quizFinished: true
				});
			}
		}, this.state.flipDuration);
	};

	restart = () => {
		const { deck } = this.props.navigation.state.params;
		const numberCards = deck.questions.length;
		let hasQuestions = false;
		let currentCard = {};
		if (numberCards > 0) {
			hasQuestions = true;
			currentCard = deck.questions[0];
		}

		this.setState({
			quizFinished: false,
			numCorrect: 0,
			numIncorrect: 0,
			numberCards,
			currentCardIndex: 0,
			hasQuestions,
			currentCard,
			frontVisible: true,
			frontRotation: new Animated.Value(0),
			backRotation: new Animated.Value(0.5)
		});
	};

	render() {
		const frontRotation = this.state.frontRotation.interpolate(
			interpolationBasis
		);
		const backRotation = this.state.backRotation.interpolate(
			interpolationBasis
		);
		const deck = this.props.navigation.state.params;
		const {
			currentCardIndex,
			numberCards,
			currentCard,
			quizFinished,
			numCorrect,
			hasQuestions
		} = this.state;

		const scoreColor = (numCorrect, numberCards) => {
			if (numCorrect === numberCards) {
				return "green";
			} else if (numCorrect < numberCards / 2) {
				return "red";
			} else {
				return "black";
			}
		};

		return hasQuestions ? (
			quizFinished ? (
				<View style={[styles.container, styles.center]}>
					<Text style={{ fontSize: 40 }}>Quiz Complete!</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={{ fontSize: 30 }}>Your Score: </Text>
						<Text
							style={{
								fontSize: 30,
								color: scoreColor(numCorrect, numberCards)
							}}
						>
							{numCorrect}
						</Text>
						<Text style={{ fontSize: 30 }}>/{numberCards}</Text>
					</View>
					<SimpleButton buttonText={"Restart Quiz"} onPress={this.restart} />
				</View>
			) : (
				<View style={styles.container}>
					<Text style={styles.indexText}>{`${currentCardIndex +
						1}/${numberCards}`}</Text>
					{/* Front */}
					<Animated.View
						style={[
							styles.card,
							styles.flipView,
							{
								transform: [
									{ perspective: this.state.perspective },
									{ rotateY: frontRotation }
								]
							}
						]}
					>
						<CardFace
							title={currentCard.question}
							header="Q:"
							onFlip={this.flipCard}
							frontVisible={this.state.frontVisible}
							onPressCorrect={this.markCorrect}
							onPressIncorrect={this.markIncorrect}
						/>
					</Animated.View>
					{/* Back */}
					<Animated.View
						style={[
							styles.card,
							styles.flipView,
							{
								transform: [
									{ perspective: this.state.perspective },
									{ rotateY: backRotation }
								]
							}
						]}
					>
						<CardFace
							title={currentCard.answer}
							header="A:"
							onFlip={this.flipCard}
							frontVisible={this.state.frontVisible}
							onPressCorrect={this.markCorrect}
							onPressIncorrect={this.markIncorrect}
						/>
					</Animated.View>
				</View>
			)
		) : (
			<View style={[styles.container, styles.center]}>
				<Text style={styles.noCardsText}>
					This deck has no cards. Press back and add a card to start a quiz.
				</Text>
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
	},
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
	},
	indexText: {
		margin: 15,
		fontSize: 18
	},
	headerText: {
		fontSize: 36,
		alignSelf: "center",
		color: "gray"
	},
	titleText: {
		marginBottom: 10,
		marginTop: 10,
		fontSize: 32,
		maxWidth: 250,
		maxHeight: 250,
		flexWrap: "wrap"
	},
	answerInputText: {
		marginTop: 20,
		marginBottom: 20,
		width: 300,
		height: 50,
		borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
		textAlign: "center"
	},
	button: {
		marginBottom: 10
	},
	flipButton: {
		backgroundColor: "white",
		borderWidth: 0,
		padding: 10,
		marginBottom: 100
		// alignSelf: "flex-end"
	},
	noCardsText: {
		textAlign: "center",
		fontSize: 32,
		padding: 20
	}
});

export default QuizView;
