import {useSelector} from "react-redux";
import {FlatList, StyleSheet} from "react-native";
import {quizData} from "../data/quizData";
import {AnswersListItem} from "./AnswersListItem";

export const AnswersList = () => {
  const { myAnswers } = useSelector((state) => state.quiz);

  return (
    <FlatList
      data={quizData}
      renderItem={({item}) =>(
        <AnswersListItem
          item={item}
          correctAnswer={item.answer}
          checkerOption={myAnswers.find(answer => answer.questionId === item.id).checkedOption} />
      )}
      keyExtractor={item => item.id}
    />

  )
}


