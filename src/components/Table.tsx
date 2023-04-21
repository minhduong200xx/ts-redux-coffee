import React from "react";
import { choiceTable } from "../redux/selectSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { tableSelector } from "../redux/selector";
import { useDispatch } from "react-redux";
const Table = ({ id, status }: { id: number; status: string }) => {
  const tableData = useAppSelector(tableSelector);
  const dispatch = useDispatch();
  const showTable = () => {
    dispatch(choiceTable(id));
  };
  return (
    <button
      value={id}
      className={`items-center flex justify-center h-16 w-20 rounded-2xl hover:bg-yellow-400 text-2xl font-bold text-white ${status} `}
      onClick={showTable}
    >
      {id}
    </button>
  );
};

export default Table;
