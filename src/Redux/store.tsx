import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import examReducer from "./examSlice";
import examsPageSlice from "./examsPageSlice";
import ReduxThunk from "redux-thunk";

export const middlewares = [ReduxThunk];

export const store = configureStore({
  reducer: {
    user: userReducer,
    examlist: examReducer,
    examPage: examsPageSlice.reducer,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
