import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import selectSlice from "./selectSlice";
export const store = configureStore({
  reducer: {
    tables: tableSlice,
    selected: selectSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
