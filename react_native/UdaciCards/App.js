import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	Platform
} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Constants } from "expo";
import { Entypo } from "@expo/vector-icons";

import MainNavigator from "./navigation";
import reducer from "./reducers";
import { setLocalNotification } from "./utils/helpers";

import { primaryColor, secondaryColor } from "./utils/colors";

function MainStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
}

export default class App extends React.Component {
	componentDidMount() {
		setLocalNotification();
	}

	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{ flex: 1 }}>
					<MainStatusBar
						backgroundColor={secondaryColor}
						barStyle={"light-content"}
					/>
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
