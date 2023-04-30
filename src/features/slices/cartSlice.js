import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  value: [],
  noOfItems: {},
  totalItems: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let obj = state.value.find(obj => action.payload.id === obj.id);
      let key = action.payload.category;
      if (obj) {
        state.noOfItems[key] = state.noOfItems[key] + 1;
      } else {
        state.value.push(action.payload);
        state.noOfItems[key] = 1;
      }
      state.totalItems++;
      // state.push(action.payload);
    },
    removeItem: (state, action) => {
      let newItems = state.filter(val => val.id !== action.payload);
      state.value.push(newItems);
      state.totalItems--;
    },
  },
});

export default cartSlice.reducer;
export const {addItem, removeItem} = cartSlice.actions;

//id-->of book
