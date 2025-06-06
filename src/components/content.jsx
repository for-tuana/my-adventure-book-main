import React, { useState, useRef, useEffect } from "react";

export default function Content() {
  const [pressedButton, setPressedButton] = useState(null);
  const journalRef = useRef(null);
  const categoriesRef = useRef(null);
  const timerRef = useRef(null);
  const productivityRef = useRef(null);

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
      alert("Categories button worked successfully!!");
    }

    if (pressedButton === "timer" && timerRef.current?.contains(e.target)) {
      alert("Timer button worked successfully!!");
    }

    if (
      pressedButton === "productivity" &&
      productivityRef.current?.contains(e.target)
    ) {
      alert("Productivity button worked successfully!!");
    }

    setPressedButton(null);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [pressedButton]);

  const getButtonClass = (key, baseClass) => {
    return `
      px-4 py-2 rounded-full font-semibold text-[#FCF6E3]
      absolute bottom-24 left-12 transition duration-200 ease-in-out
      cursor-pointer
      ${
        pressedButton === key
          ? "bg-transparent border border-[#FCF6E3]"
          : baseClass
      }
    `;
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-normal mb-12">“ STUFF I'm Going TO DO “</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
        {/* Adventure Book */}
        <div className="w-[505px] h-[400px] bg-[#fce7af] p-12 rounded-[30px] shadow relative group">
          <h3 className="text-xl font-bold mb-6">Title</h3>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            tempore repellat veritatis voluptas debitis numquam nobis nam ab
            ipsam mollitia.
          </p>

          <button
            ref={journalRef}
            onMouseDown={() => handleMouseDown("journal")}
            className={getButtonClass("journal", "bg-[#fbd161]")}
          >
            See more
          </button>

          <button className="border-none p-0 m-0 focus:outline-none absolute top-[-5px] left-[-30px] rotate-[-45deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src="./assets/lemon-lime.png"
              alt="Lemon Lime Badge"
              className="w-[100px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>

          <button className="border-none p-0 m-0 focus:outline-none absolute bottom-[-12px] right-6">
            <img
              src="./assets/adventure-book.png"
              alt="Adventure Book"
              className="w-[150px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
        </div>

        {/* Set Your Goals */}
        <div className="w-[505px] h-[400px] bg-[#e2e6c6] p-12 rounded-[30px] shadow relative group">
          <h3 className="text-xl font-bold mb-6">Title</h3>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione
            eveniet quaerat veritatis suscipit vitae porro omnis error quae.
          </p>

          <button
            ref={categoriesRef}
            onMouseDown={() => handleMouseDown("categories")}
            className={getButtonClass("categories", "bg-[#bacf9b]")}
          >
            See more
          </button>

          <button className="border-none p-0 m-0 focus:outline-none absolute bottom-0 right-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src="./assets/up-jar-ellie.png"
              alt="Jar Ellie"
              className="w-[80px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
          <button className="border-none p-0 m-0 focus:outline-none absolute bottom-[-18px] right-35">
            <img
              src="./assets/paradise-jar.png"
              alt="Paradise Jar"
              className="w-[90px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
          <button className="border-none p-0 m-0 focus:outline-none absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src="./assets/up-jar-carl.png"
              alt="Jar Carl"
              className="w-[150px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
        </div>

        {/* Timer */}
        <div className="w-[505px] h-[400px] bg-[#f6bc90] p-12 rounded-[30px] shadow relative group">
          <h3 className="text-xl font-bold mb-6">Title</h3>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            similique voluptatum nulla tempore doloremque maiores iusto.
          </p>

          <button
            ref={timerRef}
            onMouseDown={() => handleMouseDown("timer")}
            className={getButtonClass("timer", "bg-[#ed6414]")}
          >
            See more
          </button>

          <button className="border-none p-0 m-0 focus:outline-none absolute top-[-5px] left-[-30px] rotate-[-45deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src="./assets/cola-badge.png"
              alt="Cola Badge"
              className="w-[100px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
          <button className="border-none p-0 m-0 focus:outline-none absolute bottom-[-10px] right-10">
            <img
              src="./assets/carls-sofa.png"
              alt="Carl's Sofa"
              className="w-[110px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
        </div>

        {/* Productivity */}
        <div className="w-[505px] h-[400px] bg-[#d8c0e2] p-12 rounded-[30px] shadow relative group">
          <h3 className="text-xl font-bold mb-6">Title</h3>
          <p className="font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            odit deleniti ea illo harum reiciendis voluptatibus.
          </p>

          <button
            ref={productivityRef}
            onMouseDown={() => handleMouseDown("productivity")}
            className={getButtonClass("productivity", "bg-[#a26ee0]")}
          >
            See more
          </button>

          <button className="border-none p-0 m-0 focus:outline-none absolute top-[-5px] left-[-30px] rotate-[-45deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src="./assets/grape-soda-badge.png"
              alt="Grape Soda Badge"
              className="w-[100px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
          <button className="border-none p-0 m-0 focus:outline-none absolute bottom-[-10px] right-8">
            <img
              src="./assets/ellies-sofa.png"
              alt="Ellie's Sofa"
              className="w-[110px] hover:scale-105 transition-transform bg-transparent"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
