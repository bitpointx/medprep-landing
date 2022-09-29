import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  exampagelist: [],
  exam: null,
};
const examsPageSlice: any = createSlice({
  name: "examPage",
  initialState,
  reducers: {
    setExamPage: (state, action) => {
      return {
        ...state,
        exampagelist: action.payload.question,
        exam: action.payload.exam,
      };
      // state.exampagelist = action.payload.question;
    },

    changeAns: (state, action) => {
      const questions = state.exampagelist;
      let arrayInd = questions.findIndex(
        (e, index) => index === action.payload.index
      );

      const latest = current(questions)[arrayInd] as any;
      (questions[arrayInd] as any) = {
        ...latest,
        selectedAnswer: action.payload.selectedAnswer,
      };

      // console.log();
    },
  },
});
export const { setExamPage, changeAns } = examsPageSlice.actions;
export default examsPageSlice;
