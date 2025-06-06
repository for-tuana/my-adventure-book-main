import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [pressedButton, setPressedButton] = useState(null);
  const journalRef = useRef(null);
  const categoriesRef = useRef(null);

  const handleMouseDown = (btnName) => {
    setPressedButton(btnName);
  };

  const handleMouseUp = (e) => {
    if (pressedButton === "journal" && journalRef.current?.contains(e.target)) {
      alert("Start Your Journal button worked successfully!");
    }

    if (
      pressedButton === "categories" &&
      categoriesRef.current?.contains(e.target)
    ) {
      alert("Categories button worked successfully!");
    }

    setPressedButton(null);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [pressedButton]);

  return (
    <div>
      <div className="absolute top-10 left-35 flex">
        <button className="border-none p-0 m-0 focus:outline-none">
          <img
            src="./assets/grape-soda-logo.PNG"
            alt="Grape Soda Button"
            className="w-[80px] hover:scale-105 transition-transform bg-transparent"
          />
        </button>

        <div className="w-px h-13 bg-white ml-6 mr-5"></div>

        <div className="space-y-[3px] pt-5 pr-1">
          <div className="w-5 h-0.25 bg-white"></div>
          <div className="w-3.5 h-0.25 bg-white"></div>
          <div className="w-2.5 h-0.25 bg-white"></div>
        </div>

        {/* Categories Button */}
        <button
          ref={categoriesRef}
          onMouseDown={() => handleMouseDown("categories")}
          className={`absolute left-40 text-white font-medium rounded-full px-3 py-1.5 text-center transition duration-500 cursor-pointer
              ${
                pressedButton === "categories"
                  ? "bg-transparent border border-[#FCF6E3]"
                  : "bg-transparent hover:bg-[#FCF6E3] hover:text-black"
              }
            `}
        >
          Categories
        </button>
      </div>

      {/* Start Your Journal Button */}
      <button
        ref={journalRef}
        onMouseDown={() => handleMouseDown("journal")}
        type="button"
        className={`absolute top-10 right-[35px] text-white font-medium rounded-full px-3 py-1.5 text-center transition duration-500 cursor-pointer
            ${
              pressedButton === "journal"
                ? "bg-transparent border border-[#FCF6E3]"
                : "bg-transparent hover:bg-[#FCF6E3] hover:text-black"
            }
          `}
      >
        Start Your Journal
      </button>
    </div>
  );
}
