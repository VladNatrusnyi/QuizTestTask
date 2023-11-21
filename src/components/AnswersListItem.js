import {StyleSheet, Text, View} from "react-native";
import React from "react";

export const AnswersListItem = ({item, checkerOption, correctAnswer}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.question}</Text>
      {
        item.options.map(option => {
          return (
            <Text
              key={option}
              style={[
                styles.options,
                { backgroundColor: correctAnswer === option ? 'green'
                    : option === checkerOption && correctAnswer !== option
                      ? 'red': 'transparent' }
              ]}
            >{option}</Text>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20
  },

  title: {
    marginBottom: 10
  },

  options: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
