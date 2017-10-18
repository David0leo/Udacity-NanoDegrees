import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { getDecks } from "../utils/api";
import Deck from './Deck';

export default class DeckList extends React.Component {
	state = {
		decks: []
	};

	componentDidMount() {
    getDecks().then(
      (response) => {
        if (response !== undefined){
        return Object.keys(response).map((key) => (
          response[key]
        ))}
      }
    )
    .then(data => this.setState({decks: data}))

    // const rawDecks = getDecks();
    // console.log("ahh", rawDecks)
		// const decks = Object.keys(rawDecks).map(key => {
		// 	rawDecks[key];
		// });

		// this.setState({ decks });
	}

	renderDeck = ({item}) => {
    if (typeof item === undefined){
      return <Text>Shit</Text>
    }
    return (
      <View>
			<Text>Test</Text>
		</View>
    )
		
	}

	render() {
    console.log(" state", this.state.decks)
		return (
			<View>
        {this.state.decks.length === 0 
          ? <Text>Oops</Text>
          : <FlatList
					data={this.state.decks}
					renderItem={({ item }) => <Deck deck={item}></Deck>}
          keyExtractor={( item ) => item["title"]}
				/>
        }
				
			</View>
		);
	}
}
