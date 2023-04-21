import React from "react";
import Table from "./Table";
import { useAppSelector } from "../hooks";
import { tableSelector } from "../redux/selector";
import { Table as tb } from "../types/types";

const TableList = () => {
  var data = useAppSelector(tableSelector);
  return (
    <div className="w-fit mx-auto bg-emerald-500 h-fit py-10 px-10 my-4 rounded-2xl shadow-2xl">
      <h3 className="text-white text-2xl font-bold uppercase mx-auto w-fit py-2">
        Chọn bàn
      </h3>
      <div className="grid grid-cols-5 gap-10 gap-y-10 mx-auto mt-4 cursor-pointer w-full">
        {data.map((item: tb) => (
          <Table
            key={item.id}
            id={item.id}
            status={item.empty ? "bg-green-700" : "bg-red-700"}
          />
        ))}
      </div>
    </div>
  );
};

export default TableList;
