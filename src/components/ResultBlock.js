import {StyleSheet, Text, View} from "react-native";
import {CustomBtn} from "./UI/CustomBtn";
import {useDispatch, useSelector} from "react-redux";
import {resetState} from "../store/quizSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";

export const ResultBlock = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [scoreFromStorage, setScoreFromStorage] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('previous-score')
      .then(data => {
        setScoreFromStorage(data ?? null);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return (
    <View style={styles.result}>
      <Text style={styles.resultText}>The test is complete</Text>
      <Text style={styles.resultText}>Your result</Text>
      <Text style={styles.resultScore}>{scoreFromStorage}</Text>
      <Text style={styles.resultText}>correct answers</Text>

      <View>
        <CustomBtn
          text={'Try again'}
          onPress={() => dispatch(resetState())}
        />
        <CustomBtn
          text={'Show answers'}
          backgroundColor={'gray'}
          onPress={() => navigation.navigate('Answers to questions')}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  result: {
    marginTop: 20
  },
  resultText: {
    fontSize: 24,
    textAlign: "center"
  },
  resultScore: {
    fontSize: 30,
    textAlign: "center",
    color: 'red'
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
