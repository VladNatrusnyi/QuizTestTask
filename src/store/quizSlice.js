import { createSlice } from '@reduxjs/toolkit'
import {quizData} from "../data/quizData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeScore = async (value) => {
  try {
    await AsyncStorage.setItem('previous-score', value.toString());
  } catch (e) {
    console.log('Error', e);
  }
};


const emptyInitialState = {
  currentQuestion: 0,
  myAnswers: [],
  score: 0,
  disabled: true,
  isEnd: false,

  currentAnswer: null
}

const initialState = emptyInitialState;

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload
    },
    setMyAnswers: (state, action) => {
      if (state.currentAnswer) {
        state.myAnswers = [...new Set([...state.myAnswers, state.currentAnswer])]
        // state.myAnswers = action.payload
      }
    },
    getScore: (state, action) => {
      if (state.myAnswers.length === quizData.length) {
        const score = state.myAnswers.filter((userAnswer) => {
          const question = quizData.find(q => q.id === userAnswer.questionId);
          if (question && userAnswer.checkedOption === question.answer) {
            return userAnswer
          }
        }).length
        state.score = score;
        storeScore(score);
      }
    },
    setDisabled: (state, action) => {
      state.disabled = action.payload
    },
    setIsEnd: (state, action) => {
      state.isEnd = action.payload
    },

    setCurrentAnswer: (state, action) => {
      if (action.payload) {
        state.disabled = false
      }
      state.currentAnswer = action.payload
    },

    resetState: (state, action) => {
      return emptyInitialState
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setCurrentQuestion,
  setMyAnswers,
  getScore,
  setDisabled,
  setIsEnd,

  setCurrentAnswer,
  resetState
} = quizSlice.actions

export default quizSlice.reducer
