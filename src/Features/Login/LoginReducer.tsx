import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  isLoggedIn: false,
  jwtToken: null,
  refreshToken: null,
  username: null,
  userId: null,
};

// auth reducer method
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login reducer action
    login: (state, { type, payload }) => {
      const { jwtToken, refreshToken, username, userId } = payload;
      return {
        ...state,
        isLoggedIn: true,
        jwtToken,
        refreshToken,
        username,
        userId,
      };
    },
    //logout reducer action
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        jwtToken: null,
        refreshToken: null,
        username: null,
        userId: null,
      };
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;