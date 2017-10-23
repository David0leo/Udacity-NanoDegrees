import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { AppLoading } from "expo";

import { getDecks, saveDeckTitle } from "../utils/api";
import { recieveDecks } from "../actions";
import Deck from "./Deck";

class DeckListView extends React.Component {
	state = {
		ready: true
	};

	componentDidMount() {
		const { recieveDecks } = this.props;

		getDecks()
			.then(response => {
				if (response !== undefined) {
					return response;
				}
			})
			.then(decks => recieveDecks(decks))
			.then(() =>
				this.setState(() => ({
					ready: true
				}))
			);
	}

	renderDeckButton = deck => {
		return (
			<TouchableOpacity
				onPress={() => this.props.navigation.navigate("DeckView", { deck })}
			>
				<Deck deck={deck} />
			</TouchableOpacity>
		);
	};

	render() {
		const { decks } = this.props;
		const { ready } = this.state;

		if (!ready) {
			return <AppLoading />;
		}
		return (
			<View style={styles.container}>
				<FlatList
					data={Object.keys(decks).map(title => decks[title])}
					renderItem={({ item }) => this.renderDeckButton(item)}
					keyExtractor={item => item["title"]}
					style={{ flex: 1 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "white",
		paddingTop: 10
	}
});

function mapStateToProps(decks) {
	return {
		decks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		recieveDecks: decks => dispatch(recieveDecks(decks))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);
