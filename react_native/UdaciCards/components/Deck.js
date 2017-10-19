import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { white } from '../utils/colors'

export default function Deck ({ deck, style }) {
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
    <View style={[styles.card, style]}>
      <Text style={{fontSize: 24}}>{title}</Text>
      <Text style={{fontSize: 18, color: 'gray'}}>{questions.length} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
})