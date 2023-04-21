import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  filterCategories,
  selectSelector,
  showBillSelector,
  showListSelector,
  tableSelector,
} from "../redux/selector";
import Drink from "./Drink";
import currency from "currency.js";
import Bill from "./Bill";
import { drinks, categories } from "../utils/data";
import { clearData, setNotEmpty } from "../redux/tableSlice";
import { show } from "../redux/selectSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Drink as drink } from "../types/types";
import { Table as table } from "../types/types";
const DrinksList = () => {
  const tableData = useAppSelector(fetchData);
  const currentTable = useAppSelector(selectSelector);
  const bill = useAppSelector(showBillSelector);
  const list = useAppSelector(showListSelector);
  const [clear, setClear] = useState(true);
  const dispatch = useAppDispatch();
  const handlePrintBill = () => {
    dispatch(show({ list: false, bill: false }));
    dispatch(setNotEmpty({ id: currentTable }));
  };
  const handleSetEmpty = () => {
    dispatch(show({ list: false, bill: false }));
    dispatch(clearData({ id: currentTable }));
  };
  const handleClose = () => {
    dispatch(clearData({ id: currentTable }));
    dispatch(show({ list: false, bill: false }));
  };
  const handleCloseWithout = () => {
    setClear(false);
    dispatch(show({ list: false, bill: false }));
  };
  return (
    <div
      className={`bg-opacity-50 bg-black w-full h-full absolute top-0 left-0 flex justify-center ${
        list === false && bill === false ? "hidden" : ""
      }`}
    >
      <button
        className={`relative float-right z-10 w-10 h-10 -right-[470px] rounded-lg mt-2 hover:bg-red-600 hover:text-white top-16 font-extrabold text-2xl ${
          tableData && !tableData.empty && tableData.total !== 0 ? "hidden" : ""
        }`}
        onClick={handleClose}
      >
        X
      </button>
      <div
        className={`w-[800px] h-[90%] bg-slate-300 relative top-16 rounded-2xl -left-80 justify-center py-2 ${
          tableData && tableData.empty && list ? "" : "hidden"
        }`}
      >
        <h2 className="text-black font-medium text-2xl uppercase italic w-fit mx-auto">
          Menu
        </h2>
        <div className="flex flex-col w-[700px] h-[90%] py-4 relative mx-auto pt-2 gap-4 overflow-y-scroll sidebar cursor-pointer ">
          {categories &&
            categories.map((item) => (
              <div key={item.id} className=" w-full">
                <h3 className="text-lg font-medium pl-4">{item.title}</h3>
                <div className="grid grid-cols-3 gap-2 pt-2 w-full">
                  {filterCategories(item.title) &&
                    filterCategories(item.title).map(
                      (drink) =>
                        drink.id &&
                        drink.imgUrl &&
                        drink.name &&
                        drink.price && (
                          <Drink
                            key={drink.id}
                            imgUrl={drink.imgUrl}
                            name={drink.name}
                            price={drink.price}
                          />
                        )
                    )}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`w-[500px] h-[90%] bg-slate-300 absolute top-16 rounded-2xl right-6 justify-center py-2 ${
          tableData && tableData.empty && bill ? "" : "hidden"
        }`}
      >
        <div className="w-fit mx-auto flex my-2 rounded-2xl bg-gradient-to-tr from-orange-500 to-green-500 p-3 items-center">
          <img
            src="https://pbs.twimg.com/media/DMUmBneVAAAyGOF.png"
            alt=""
            className="w-12 h-12 object-contain overflow-clip"
          />
          <span className="text-2xl text-white font-bold pl-2 italic">
            Rainbow Coffee
          </span>
        </div>
        <div className="w-full">
          <h3 className="font-medium text-center">
            Địa chỉ: Ngõ 102 Trần Phú, Mộ Lao, Hà Đông, Hà Nội
          </h3>
          <h3 className="font-bold text-center text-4xl mt-2">
            Hoá đơn thanh toán
          </h3>
          <h3 className="font-bold text-center text-xl mt-2">
            Bàn số: {currentTable}
          </h3>
        </div>
        <table className="flex flex-col items-center justify-center w-full mt-6">
          <thead className="w-full">
            <tr className="flex mx-auto w-[90%] bg-slate-400">
              <th className="w-1/2">Desc</th>
              <th className="w-1/6">Qty</th>
              <th className="w-1/5">Price</th>
              <th className="w-1/4">Other</th>
            </tr>
          </thead>
          <tbody className="w-full overflow-y-scroll sidebar h-[300px]">
            {tableData &&
              tableData.drink &&
              tableData.drink.map((item: drink) => {
                if (item.id && item.name && item.price && item.quantity)
                  return (
                    <Bill
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      id={currentTable}
                      hide={false}
                    ></Bill>
                  );
              })}
          </tbody>
        </table>
        <span className="ml-[50%] w-full text-lg font-medium  flex">
          Total:{" "}
          <p className="ml-5">
            {tableData &&
              currency(tableData.total * 1000, {
                symbol: "",
                separator: ",",
                decimal: ".",
                precision: 0,
              }).format()}

            <sup className="underline">đ</sup>
          </p>
        </span>
        <button
          className="rounded-lg shadow-lg bg-slate-200 font-medium px-4 py-2 float-right mr-4 mt-2 text-green-600 hover:bg-green-600 hover:text-white"
          onClick={handlePrintBill}
        >
          In hoá đơn
        </button>
      </div>
      <div
        className={`w-[500px] h-[90%] bg-slate-300 absolute top-16 rounded-2xl mx-auto py-2 ${
          tableData && !tableData.empty && tableData.total !== 0 ? "" : "hidden"
        }`}
      >
        <button
          className="relative float-right z-10 w-10 h-10 right-2 rounded-lg mt-2 hover:bg-red-600 hover:text-white top-0 font-extrabold text-2xl"
          onClick={handleCloseWithout}
        >
          X
        </button>
        <div className="w-fit mx-auto flex my-2 rounded-2xl bg-gradient-to-tr from-orange-500 to-green-500 p-3 items-center">
          <img
            src="https://pbs.twimg.com/media/DMUmBneVAAAyGOF.png"
            alt=""
            className="w-12 h-12 object-contain overflow-clip"
          />
          <span className="text-2xl text-white font-bold pl-2 italic">
            Rainbow Coffee
          </span>
        </div>
        <div className="w-full">
          <h3 className="font-medium text-center">
            Địa chỉ: Ngõ 102 Trần Phú, Mộ Lao, Hà Đông, Hà Nội
          </h3>
          <h3 className="font-bold text-center text-4xl mt-2">
            Hoá đơn thanh toán
          </h3>
          <h3 className="font-bold text-center text-xl mt-2">
            Bàn số: {currentTable}
          </h3>
        </div>
        <table className="flex flex-col items-center justify-center w-full mt-6">
          <thead className="w-full">
            <tr className="flex mx-auto w-[90%] bg-slate-400">
              <th className="w-1/2">Desc</th>
              <th className="w-1/6">Qty</th>
              <th className="w-1/5">Price</th>
            </tr>
          </thead>
          <tbody className="w-full overflow-y-scroll sidebar h-[300px]">
            {tableData &&
              tableData.drink &&
              tableData.drink.map((item: drink) => {
                if (item.id && item.name && item.price && item.quantity)
                  return (
                    <Bill
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      id={currentTable}
                      hide={true}
                    ></Bill>
                  );
              })}
          </tbody>
        </table>
        <span className="ml-[50%] w-full text-lg font-medium  flex">
          Total:{" "}
          <p className="ml-5">
            {tableData &&
              currency(tableData.total * 1000, {
                symbol: "",
                separator: ",",
                decimal: ".",
                precision: 0,
              }).format()}
            <sup className="underline">đ</sup>
          </p>
        </span>
        <button
          className="rounded-lg shadow-lg bg-slate-200 font-medium px-4 py-2 float-right mr-4 mt-2 text-green-600 hover:bg-green-600 hover:text-white"
          onClick={handleSetEmpty}
        >
          Trả bàn
        </button>
      </div>
    </div>
  );
};

export default DrinksList;
