import { configureStore } from "@reduxjs/toolkit";
import langReducer from './langSlice';
import historySlice from "./historySlice";

export const store = configureStore({
  reducer: {
    lang: langReducer,
    history: historySlice,
  }
})