import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  token: "",
};
const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setTokenGlobal: (state, action) => {
      state.token = action.payload.token;
    },
  },
});
export const { setActiveUser, setTokenGlobal } = userSlice.actions;
export const selectName = (state: any) => state.user.name;
export const selectEmail = (state: any) => state.user.email;
export const selectToken = (state: any) => state.user.token;
export default userSlice.reducer;
