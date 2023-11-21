import React, {useMemo} from 'react';
import { View, StyleSheet } from 'react-native';
import {QuestionBlock} from "./QuestionBlock";
import {useDispatch, useSelector} from "react-redux";
import {getScore, setCurrentQuestion, setDisabled, setIsEnd, setMyAnswers} from "../store/quizSlice";
import {ResultBlock} from "./ResultBlock";
import {CustomBtn} from "./UI/CustomBtn";
import {quizData} from "../data/quizData";

export const Quiz = () => {
  const dispatch = useDispatch();

  const {
    currentQuestion,
    score,
    disabled,
    isEnd
  } = useSelector((state) => state.quiz);


  const nextQuestionHandler = async () => {
    if (currentQuestion === quizData.length - 1) {
      dispatch(setMyAnswers());
      dispatch(getScore());
      dispatch(setIsEnd(true));
      dispatch(setCurrentQuestion(0));
    } else {
      dispatch(setMyAnswers());
      dispatch(setDisabled(true));
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }
  };


  const questionTitle = useMemo(() => quizData[currentQuestion].question,[currentQuestion, quizData]);
  const questionNumber = useMemo(() => currentQuestion + 1,[currentQuestion]);
  const options = useMemo(() => quizData[currentQuestion].options,[currentQuestion, quizData]);

  return (
    <View style={styles.container}>
      {isEnd ? (
        <ResultBlock />
      ) : (
        <>
          <QuestionBlock
            question={questionTitle}
            options={options}
            questionNumber={questionNumber}
            totalNumQuestions={quizData.length}
          />
          <CustomBtn
            text={currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
            onPress={nextQuestionHandler}
            disabled={disabled}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#70b9ff',
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
