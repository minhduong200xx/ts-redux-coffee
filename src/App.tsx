import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import TableList from "./components/TableList";
import DrinksList from "./components/DrinkList";
import { useSelector } from "react-redux";
import { tableSelector } from "./redux/selector";

function App() {
  const table = useSelector(tableSelector);
  useEffect(() => {
    localStorage.setItem("tables", JSON.stringify(table));
  }, [table]);
  return (
    <div className="bg-slate-50 h-full w-full">
      <Header></Header>
      <TableList></TableList>
      <DrinksList></DrinksList>
    </div>
  );
}

export default App;
