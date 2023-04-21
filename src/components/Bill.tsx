import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteDrink, increaseQty } from "../redux/tableSlice";

const Bill = ({
  id,
  quantity,
  price,
  name,
  hide,
}: {
  name: string;
  quantity: number;
  price: number;
  id: number;
  hide: boolean;
}) => {
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(decreaseQty({ name: name, price: price, id: id }));
  };
  const handleIncrease = () => {
    dispatch(increaseQty({ name: name, price: price, id: id }));
  };
  const handleDelete = () => {
    dispatch(
      deleteDrink({ name: name, quantity: quantity, price: price, id: id })
    );
  };
  return (
    <tr className="flex mx-auto w-[90%] h-6 py-2">
      <td className="w-1/2 overflow-hidden h-5 pl-2">{name}</td>
      <td className="w-1/6 justify-center flex ">
        <button
          className={`rounded font-bold w-5 h-5 border border-solid border-black flex items-center justify-center hover:bg-red-500 hover:text-white text-red-500 ${
            hide ? "hidden" : ""
          }`}
          onClick={handleDecrease}
        >
          -
        </button>
        <a className="w-6 px-2 pb-1 bg-inherit">{quantity}</a>
        <button
          className={`rounded font-bold w-5 h-5 border border-solid border-black flex items-center justify-center hover:bg-green-600 text-green-500 hover:text-white ${
            hide ? "hidden" : ""
          }`}
          onClick={handleIncrease}
        >
          +
        </button>
      </td>
      <td className="w-1/5 text-center">
        {price}.000 <sup className="underline">đ</sup>
      </td>
      {hide ? (
        ""
      ) : (
        <td className="w-1/4 justify-center flex">
          <button
            className="text-center text-red-500 hover:underline font-medium"
            onClick={handleDelete}
          >
            Xoá
          </button>
        </td>
      )}
    </tr>
  );
};

export default Bill;
