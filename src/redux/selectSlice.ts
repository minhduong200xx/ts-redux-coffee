import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type initialState = {
  choiceTable: number;
  showList: boolean;
  showBill: boolean;
};
const selectSlice = createSlice({
  name: "select",
  initialState: { choiceTable: 1, showList: false, showBill: false },
  reducers: {
    choiceTable(state, action) {
      state.choiceTable = action.payload;
      state.showBill = true;
      state.showList = true;
    },
    show(state, action) {
      state.showList = action.payload.list;
      state.showBill = action.payload.bill;
    },
  },
});
export const { choiceTable, show } = selectSlice.actions;
export default selectSlice.reducer;
