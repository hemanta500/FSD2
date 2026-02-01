// store.js
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../components/CounterReducer";

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
});