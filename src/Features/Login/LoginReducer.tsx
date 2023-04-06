import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  error: string | null;
  username: string | null;
  password: string | null;
  userId: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  password: null,
  accessToken: null,
  refreshToken: null,
  username: null,
  userId: null,
  error: null,
};

// auth reducer method
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login reducer action
    login: (state, { type, payload }) => {
      const { accessToken, refreshToken, username, userId, password } = payload;
      return {
        ...state,
        isAuthenticated: true,
        accessToken,
        refreshToken,
        username,
        userId,
        password,
      };
    },
    //logout reducer action
    logout: (state) => {
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        username: null,
        userId: null,
        password: null,
      };
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
