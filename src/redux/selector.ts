import { createSelector } from "@reduxjs/toolkit";
import { drinks } from "../utils/data";
import { Table } from "../types/types";
import { RootState } from "./store";
export const tableSelector = (state: RootState) => state.tables.tableList;
export const selectSelector = (state: RootState) => state.selected.choiceTable;
export const showListSelector = (state: RootState) => state.selected.showList;
export const showBillSelector = (state: RootState) => state.selected.showBill;
export const fetchData = createSelector(
  tableSelector,
  selectSelector,
  (tables, select) => {
    return tables.find((item) => {
      if (item.id === select) return item;
    });
  }
);
export const filterCategories = (category: string) => {
  return drinks.filter((item) => {
    if (item.category === category) return item;
  });
};
