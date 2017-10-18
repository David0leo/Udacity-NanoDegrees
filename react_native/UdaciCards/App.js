import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import './ReactotronConfig';
import DeckList from './components/DeckList'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <DeckList></DeckList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
