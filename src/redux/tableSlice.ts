import { createSlice } from "@reduxjs/toolkit";
import { Table } from "../types/types";
import { PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  tableList: Table[];
};
const tableList: Table[] = [
  {
    id: 1,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 2,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 3,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 4,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 5,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 6,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 7,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 8,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 9,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 10,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 11,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 12,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 13,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 14,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 15,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 16,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 17,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 18,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 19,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 20,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 21,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 22,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 23,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 24,
    drink: [],
    total: 0,
    empty: true,
  },
  {
    id: 25,
    drink: [],
    total: 0,
    empty: true,
  },
];
const storage = localStorage.getItem("tables");
var data: Table[];

if (storage) {
  data = JSON.parse(storage) as Table[];
} else data = tableList;

const initialState: initialStateType = {
  tableList: data,
};
const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    addDrink: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        table: number;
        quantity: number;
      }>
    ) => {
      state.tableList.filter((item) => {
        if (item.id === action.payload.table) {
          if (item.drink.length === 0) {
            item.drink.push({
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              quantity: 1,
            });
            item.total += action.payload.price;
          } else {
            item.drink.map((drink) => {
              if (drink.name === action.payload.name && drink.quantity) {
                drink.quantity += 1;
              }
            });
            if (
              !item.drink.find((drink) => drink.name === action.payload.name)
            ) {
              item.drink.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: 1,
              });
            }
            item.total += action.payload.price;
          }
        }
      });
    },
    getDataFromStorage: (state, action: PayloadAction<initialStateType>) => {
      state = action.payload;
    },
    clearData: (state, action: PayloadAction<{ id: number }>) => {
      state.tableList.map((item) => {
        if (item.id === action.payload.id) {
          item.drink = [];
          item.total = 0;
          item.empty = true;
        }
      });
    },
    setNotEmpty: (state, action: PayloadAction<{ id: number }>) => {
      state.tableList.map((item: Table) => {
        if (item.id === action.payload.id) {
          if (item.total === 0) {
            item.empty = true;
          } else item.empty = false;
        }
      });
    },
    increaseQty: (
      state,
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      state.tableList.filter((item) => {
        if (item.id === action.payload.id) {
          item.drink.map((drink) => {
            if (drink.name === action.payload.name && drink.quantity) {
              drink.quantity += 1;
            }
          });
          item.total += action.payload.price;
        }
      });
    },
    decreaseQty: (
      state,
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      state.tableList.filter((item) => {
        if (item.id === action.payload.id) {
          item.drink.map((drin) => {
            if (drin.name === action.payload.name && drin.quantity) {
              if (drin.quantity - 1 < 1) {
                item.drink = item.drink.filter(
                  (add) => add.name !== action.payload.name
                );
              } else {
                drin.quantity -= 1;
              }
            }
          });
          item.total -= action.payload.price;
        }
      });
    },
    deleteDrink: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        price: number;
        quantity: number;
      }>
    ) => {
      state.tableList.filter((item) => {
        if (item.id === action.payload.id) {
          item.drink = item.drink.filter(
            (drink) => drink.name !== action.payload.name
          );
          item.total -= action.payload.price * action.payload.quantity;
        }
      });
    },
  },
});
export const {
  addDrink,
  clearData,
  setNotEmpty,
  increaseQty,
  decreaseQty,
  deleteDrink,
  getDataFromStorage,
} = tableSlice.actions;
export default tableSlice.reducer;
