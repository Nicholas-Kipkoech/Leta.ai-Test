import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
  id: string | null;
  password: string | null;
}

const initialState: UserState = {
  username: null,
  id: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const { username, id, password } = payload;
      return {
        ...state,
        username,
        id,
        password,
      };
    },
    clearUser: (state) => {
      return {
        ...state,
        username: null,
        id: null,
        password: null,
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
