import React from "react";
import { useNavigate } from "react-router-dom";

function Drawer_item({ icon, label, currentLabel,url  }) {
  const navigate = useNavigate()
  return (
    <div
    onClick={()=>{navigate(url)}}
      className={`w-full px-2 py-2 flex items-center gap-4 cursor-pointer text-gray-500 hover:text-customGreen hover:bg-customGreenTrance12 text-xs font-medium   ${
        currentLabel?.toLowerCase() === label?.toLowerCase() ? "border-l-customGreen border-l-4 bg-gradient-to-r from-customGreenTrance12 from-10% via-white to-white pl-3":"pl-4"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}

export default Drawer_item;
