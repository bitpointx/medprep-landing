import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exams: [],
};

const examSlice: any = createSlice({
  name: "examlist",
  initialState,
  reducers: {
    setExamData: (state, action) => {
      state.exams = action.payload.data;
    },
  },
});
export const { setExamData } = examSlice.actions;
export default examSlice.reducer;
