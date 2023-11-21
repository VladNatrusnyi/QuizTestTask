import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCurrentAnswer} from "../store/quizSlice";

export const QuestionBlock = ({question, questionNumber, totalNumQuestions, options }) => {
  const dispatch = useDispatch()

  const [myAnswer, setMyAnswer] = useState(null);

  const checkAnswer = (option) => {
    setMyAnswer(option);
    dispatch(setCurrentAnswer({checkedOption: option, questionId: questionNumber - 1}))
  };

  return (
    <>
      <Text style={styles.questionText}>{question}</Text>
      <Text style={styles.remainingText}>
        {`${questionNumber} / ${totalNumQuestions}`}
      </Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.options,
            { backgroundColor: myAnswer === option ? '#74ebd5' : 'transparent' }
          ]}
          onPress={() => checkAnswer(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </>
  )
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    textAlign: 'center'
  },
  remainingText: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10
  },
  options: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#70b9ff',
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
