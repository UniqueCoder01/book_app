import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
const initialState = {
  credentials: [],
};
export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const name = action.payload.userName;
      const password = action.payload.password;
      const userId = action.payload.userId;
      const data = {
        name: name,
        password: password,
        userId: userId,
      };
      state.credentials.push({
        data: data,
        id: uuid.v4(),
      });
    },
  },
});
export default credentialsSlice.reducer;
export const {addUser} = credentialsSlice.actions;
