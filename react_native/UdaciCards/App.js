import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import './ReactotronConfig';

import { getDecks, saveDeckTitle } from './utils/api';

export default class App extends React.Component {
  addDeckTitle() {
    saveDeckTitle({title: "help"})
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: 'red', width: 50, height: 50}} onPress={this.addDeckTitle}/>
        <TouchableOpacity style={{backgroundColor: 'blue', width: 50, height: 50}} onPress={getDecks}/>
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
