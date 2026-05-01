import { createSlice } from "@reduxjs/toolkit";

const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUser(),
  },

  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
