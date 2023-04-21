import React from "react";
import "../index.css";
const Header = () => {
  return (
    <div className="w-[100vw] h-16 text-xxl bg-gradient-to-br from-yellow-400 to-violet-400 flex items-center pl-4">
      <img
        src="https://pbs.twimg.com/media/DMUmBneVAAAyGOF.png"
        alt=""
        className="w-12 h-12 object-contain overflow-clip"
      />
      <span className="text-2xl text-white font-bold pl-2 italic">
        Rainbow Coffee
      </span>
    </div>
  );
};

export default Header;
