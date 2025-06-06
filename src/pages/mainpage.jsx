import React from "react";
import Navbar from "../components/navbar";
import Content from "../components/content";
import Form from "../components/form";

export default function AdventureJournal() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFF8ED] text-[#1F1F1F] font-serif4 text-xl overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url('./assets/up-background.jpg')` }}
      >
        <Navbar />
      </div>

      {/* Content Section */}
      <div>
        <Content />
      </div>

      {/* Form Section */}
      <div>
        <Form />
      </div>

      <button
        onClick={handleClick}
        className="fixed bottom-2 right-8 z-50 hover:scale-105 transition-transform duration-300"
      >
        <img
          src="./assets/adventure-is-out-there-button.png"
          alt="Scroll to Top"
          className="w-[100px] h-auto"
        />
      </button>
    </div>
  );
}
