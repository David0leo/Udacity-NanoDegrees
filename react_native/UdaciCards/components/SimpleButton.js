import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SimpleButton({ buttonText, onPress, style }) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			<Text>{buttonText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center"
	}
});
