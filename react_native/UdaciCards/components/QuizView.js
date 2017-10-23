import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	ScrollView,
	Platform,
	Animated,
	Easing
} from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SimpleButton from "./SimpleButton";
import QuizNoCards from "./QuizNoCards";
import QuizFinished from "./QuizFinished";
import QuizFlipCard from "./QuizFlipCard";
import {
	clearLocalNotifications,
	setLocalNotification
} from "../utils/helpers";
import { mdBlue700, mdRed700, mdOrange700 } from "../utils/colors";
import * as actions from "../actions";

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
		currentCard: {
			question: "",
			answer: ""
		}
	};

	componentDidMount() {
		this.restart();
	}

	markCorrect = () => {
		this.props.incrementNumberCorrect();
		this.nextCard();
	};

	markIncorrect = () => {
		this.nextCard();
	};

	finishQuiz = () => {
		// finished a quiz, so they studied at least once a day
		// clear the notification for today, and set notification for tomorrow
		clearLocalNotifications().then(setLocalNotification);

		this.setState({
			quizFinished: true
		});
	};

	nextCard = () => {
		const { deck } = this.props.navigation.state.params;
		const { currentCardIndex } = this.state;
		const { numberOfQuestions } = this.props;

		currentCardIndex < numberOfQuestions - 1
			? this.setState((prevState, props) => {
					return {
						currentCardIndex: prevState.currentCardIndex + 1,
						currentCard: deck.questions[prevState.currentCardIndex + 1]
					};
				})
			: this.finishQuiz();
	};

	backToDeck = () => {
		this.props.navigation.goBack();
	}

	restart = () => {
		// sets number correct to 0 in redux
		this.props.resetQuiz();

		const { deck } = this.props.navigation.state.params;
		const numberOfQuestions = deck.questions.length;
		let hasQuestions = false;
		let currentCard = {};
		if (numberOfQuestions > 0) {
			hasQuestions = true;
			currentCard = deck.questions[0];

			this.props.setNumberOfQuestions(numberOfQuestions);
		}

		this.setState({
			quizFinished: false,
			currentCardIndex: 0,
			hasQuestions,
			currentCard
		});
	};

	render() {
		const deck = this.props.navigation.state.params;
		const {
			currentCardIndex,
			currentCard,
			quizFinished,
			hasQuestions
		} = this.state;

		const { numberOfQuestions } = this.props;

		return hasQuestions ? (
			quizFinished ? (
				<QuizFinished restartCallback={this.restart} goBackCallback={this.backToDeck}/>
			) : (
				<View style={styles.container}>
					<Text style={styles.indexText}>{`${currentCardIndex +
						1}/${numberOfQuestions}`}</Text>
					<QuizFlipCard
						card={currentCard}
						onPressCorrect={this.markCorrect}
						onPressIncorrect={this.markIncorrect}
					/>
				</View>
			)
		) : (
			// No questions
			<QuizNoCards />
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
	indexText: {
		margin: 15,
		fontSize: 18
	},
	headerText: {
		fontSize: 36,
		alignSelf: "center",
		color: "gray"
	}
});

function mapStateToProps({ quiz }) {
	return {
		numberCorrect: quiz.numberCorrect,
		numberOfQuestions: quiz.numberOfQuestions
	};
}

export default connect(mapStateToProps, actions)(QuizView);
