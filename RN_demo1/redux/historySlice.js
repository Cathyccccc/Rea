import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: 'history',
  initialState: {
    historyList: []
  },
  reducers: {
    setHistory: (state, action) => {
      state.historyList.unshift(action.payload);
    },
    deleteHistory: (state, action) => {
      state.historyList.splice(action.payload, 1);
    },
    clearHistory: (state) => {
      state.historyList = [];
    }
  }
});

export const {setHistory, deleteHistory, clearHistory} = historySlice.actions;
export default historySlice.reducer;