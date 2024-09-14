import React, { useState } from "react";

function Dropdown({ label, options, currentLabel, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full  items-center gap-4 cursor-pointer text-gray-500 hover:text-customGreen hover:bg-customGreenTrance12 text-xs font-medium   ${
        currentLabel?.toLowerCase() === label?.toLowerCase()
          ? "border-l-customGreen border-l-4 bg-gradient-to-r from-customGreenTrance12 from-10% via-white to-white pl-3"
          : ""
      }`}
    >
      <button
        className="flex w-full items-center  gap-4 justify-between px-4 pt-2 text-gray-700 bg-white cursor-pointer"
        onClick={handleToggle}
      >
        <span className="flex items-center gap-4 text-gray-500 bg-white cursor-pointer">{icon}{label}</span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className=" top-full px-3 bg-white  ">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  // Handle option selection here
                  console.log(`Selected option: ${option}`);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
