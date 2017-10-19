import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity
} from "react-native";
import { getDecks, saveDeckTitle } from "../utils/api";
import Deck from "./Deck";

export default class DeckListView extends React.Component {
	state = {
		decks: []
	};

	componentDidMount() {
		saveDeckTitle({ title: "work" });
		getDecks()
			.then(response => {
				if (response !== undefined) {
					return Object.keys(response).map(key => response[key]);
				}
			})
			.then(data => this.setState({ decks: data }));
	}

	renderDeckButton = (deck) => {
		return (
			<TouchableOpacity onPress={() => this.props.navigation.navigate(
        'DeckView',
        {deck}
      )}>
				<Deck deck={deck} />
			</TouchableOpacity>
		);
	}

	render() {
		// console.log(" state", this.state.decks)
		return (
			<View style={styles.container}>
				{this.state.decks.length === 0 ? (
					<Text>Oops</Text>
				) : (
					<FlatList
						data={this.state.decks}
						renderItem={({ item }) => this.renderDeckButton(item)}
						keyExtractor={item => item["title"]}
						style={{ flex: 1 }}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: 10
	}
});
