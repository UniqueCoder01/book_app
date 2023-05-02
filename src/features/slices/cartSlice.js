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
      let key = action.payload.name;
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
    increaseItemCount: (state, action) => {
      console.log(action.payload);
      let bookName = action.payload;
      state.noOfItems[bookName]++;
    },
    decreaseItemCount: (state, action) => {
      let bookName = action.payload;
      if (action.payload !== 0) {
        state.noOfItems[bookName]--;
      } else {
        let newItems = state.filter(val => val.id !== bookName);
        state.value.push(newItems);
        state.totalItems--;
      }
    },
  },
});

export default cartSlice.reducer;
export const {addItem, removeItem, increaseItemCount, decreaseItemCount} =
  cartSlice.actions;

//id-->of book
