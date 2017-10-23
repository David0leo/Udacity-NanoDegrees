import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SimpleButton from "./SimpleButton";
import { mdBlue700, mdRed700, mdOrange700 } from "../utils/colors";

class QuizCardFace extends React.Component {
	render() {
		const {
			title,
			header,
			onFlip,
			frontVisible,
			onPressCorrect,
			onPressIncorrect,
			isVisible
		} = this.props;

		return (
			<View style={{ flex: 1 }}>
				<SimpleButton
					style={styles.flipButton}
					buttonText={frontVisible ? "Answer" : "Question"}
					onPress={onFlip}
					icon={
						<MaterialCommunityIcons
							name="rotate-3d"
							size={30}
							color={"black"}
						/>
					}
					textColor={"black"}
				/>

				<View style={styles.center}>
					<Text style={styles.headerText}>{header}</Text>
					<ScrollView>
						<Text style={styles.contentText}>{title}</Text>
					</ScrollView>
				</View>
				<SimpleButton
					onPress={isVisible ? onPressCorrect : undefined}
					style={[styles.button, { backgroundColor: mdBlue700 }]}
					buttonText={"Correct"}
					textColor={"white"}
				/>
				<SimpleButton
					onPress={isVisible ? onPressIncorrect : undefined}
					style={[styles.button, { backgroundColor: mdRed700 }]}
					buttonText={"Incorrect"}
					textColor={"white"}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	center: {
		justifyContent: "center",
		alignItems: "center"
	},
	flipButton: {
		backgroundColor: "white",
		padding: 10,
		marginBottom: 50
	},
	headerText: {
		fontSize: 36,
		alignSelf: "center",
		color: "gray"
	},
	contentText: {
		marginBottom: 10,
		marginTop: 10,
		fontSize: 32,
		maxWidth: 250,
		maxHeight: 250,
		flexWrap: "wrap"
	},
	button: {
		marginBottom: 10
	}
});

export default QuizCardFace;
