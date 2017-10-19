import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import Deck from './Deck'
import SimpleButton from './SimpleButton'

export default class DeckView extends React.Component {

  addCard() {

  }

  startQuiz() {

  }

  render() {
    const { deck } = this.props.navigation.state.params
    
    return (
      <View style={styles.container}>
        <Deck deck={deck} style={{flex: 4}}/>
        <SimpleButton
          onPress={this.addCard}
          buttonText={'Add Card'}
          style={{flex: 1}}
        />
        <SimpleButton
          onPress={this.startQuiz}
          buttonText={'Start Quiz'}
          style={{flex: 1}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})