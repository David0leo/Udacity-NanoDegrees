import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { white } from '../utils/colors'

export default function Deck ({ deck }) {
  /*
   Deck object : {
     title: 'Title',
     questions: [
       // card objects
       {...}, 
       {...}, 
       ..., 
       {...}
     ]
   }
   */
  const { title, questions } = deck;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{questions.length} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    backgroundColor: white,
  }
})