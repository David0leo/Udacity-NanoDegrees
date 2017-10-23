import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SimpleButton({
	buttonText,
	onPress,
	style,
	icon,
	textColor
}) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			{icon}
			<Text style={{ color: textColor }}>{buttonText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 50,
		borderWidth: 0,
		borderRadius: 4,
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center"
	}
});
