import { useRef, useState } from "react";

const balloons = [
  {
    src: "./assets/balloons.png",
    alt: "Balloons",
    top: 300,
    left: 100,
    rotate: 0,
    scaleX: 1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 280,
    left: 70,
    rotate: -20,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 250,
    left: 150,
    rotate: 20,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 150,
    left: 90,
    rotate: -10,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 100,
    left: 30,
    rotate: -10,
    scaleX: -1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 150,
    left: 180,
    rotate: 20,
    scaleX: -1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 260,
    left: 150,
    rotate: 20,
    scaleX: 1,
  },
  {
    src: "./assets/blue-balloon.png",
    alt: "Blue Balloon",
    top: 100,
    left: 180,
    rotate: 0,
    scaleX: 1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 210,
    left: 120,
    rotate: 0,
    scaleX: 1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 100,
    left: 20,
    rotate: -20,
    scaleX: 1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 140,
    left: 80,
    rotate: 0,
    scaleX: 1,
  },
  {
    src: "./assets/blue-balloon.png",
    alt: "Blue Balloon",
    top: 110,
    left: 220,
    rotate: 20,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 110,
    left: 220,
    rotate: 20,
    scaleX: -1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 90,
    left: 220,
    rotate: 15,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 30,
    left: 180,
    rotate: 10,
    scaleX: -1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 30,
    left: 180,
    rotate: 15,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: 30,
    left: 100,
    rotate: 10,
    scaleX: 1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 30,
    left: 100,
    rotate: 0,
    scaleX: 1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: -15,
    left: 50,
    rotate: 0,
    scaleX: -1,
  },
  {
    src: "./assets/blue-pink-balloon.png",
    alt: "Blue Pink Balloon",
    top: -15,
    left: 150,
    rotate: 0,
    scaleX: -1,
  },
  {
    src: "./assets/yellow-balloon.png",
    alt: "Yellow Balloon",
    top: 150,
    left: 120,
    rotate: 0,
    scaleX: 1,
  },
];

const Form = () => {
  const buttonRef = useRef(null);
  const [pressed, setPressed] = useState(false);

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = (e) => {
    if (!pressed) return;
    setPressed(false);

    const bounds = buttonRef.current.getBoundingClientRect();
    const inside =
      e.clientX >= bounds.left &&
      e.clientX <= bounds.right &&
      e.clientY >= bounds.top &&
      e.clientY <= bounds.bottom;

    if (inside) {
      alert("Your message has been sent successfully!");
    }
  };

  const handleMouseLeave = () => {
    setPressed(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative overflow-hidden bg-[#fef5e7]">
      {/* Hoverable house image on the bottom left */}
      <div className="absolute bottom-[-60px] left-[-1px] w-[300px] h-auto group z-10">
        <button className="border-none p-0 m-0 focus:outline-none relative w-full">
          {/* Old House */}
          <img
            src="./assets/paradise-house-old.png"
            alt="Paradise Fall Old"
            className="absolute bottom-[-6px] left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
          {/* New House */}
          <img
            src="./assets/paradise-house-new.png"
            alt="Paradise Fall New"
            className="absolute bottom-[-6px] left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </button>
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 flex">
        <div className="flex-1 rounded-r-lg p-10 flex flex-col justify-center relative  top-[50px] left-[500px]">
          <h2 className="text-xl  text-[2C201E] md:text-2xl font-semibold mb-6 text-center md:text-left">
            "HOW’S THE ADVENTURE? <br />
            LEAVE A QUICK COMMENT <br />
            AND LET US SUPPORT YOU <br />
            ON YOUR JOURNEY."
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-100 px-4 py-2 rounded-full border border-[#999794] placeholder-[2C201E] focus:outline-none "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-100 px-4 py-2 rounded-full border border-[#999794] placeholder-[2C201E] focus:outline-none"
            />
            <textarea
              placeholder="Comment"
              rows="3"
              className="w-100 px-4 py-2 rounded-xl bg-transparent border border-[#999794] placeholder-[2C201E] focus:outline-none resize-none"
            />

            <button
              ref={buttonRef}
              type="button"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className={`w-100 py-2 rounded-full font-semibold transition duration-200 ease-in-out cursor-pointer
    ${
      pressed
        ? "bg-transparent border border-[#c2a88b] text-[#c2a88b]"
        : "bg-[#c2a88b] text-[#FCF6E3] hover:bg-[#d6bfa9]"
    }`}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Balloon Buttons */}
      {balloons.map(({ src, alt, top, left, rotate, scaleX }, i) => (
        <button
          key={`${src}-${i}`}
          className="border-none p-0 m-0 focus:outline-none absolute"
          style={{
            top: `${top}px`,
            left: `${left}px`,
            transform: `rotate(${rotate}deg) scaleX(${scaleX})`,
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-[100px] hover:scale-105 transition-transform bg-transparent"
          />
        </button>
      ))}

      {/* Right Panel */}
      <div className="absolute top-[95px] right-[-10px] z-0">
        <button className="border-none p-0 m-0 focus:outline-none">
          <img
            src="./assets/paradise-fall.png"
            alt="Paradise Fall"
            className="w-[490px] hover:scale-105 transition-transform bg-transparent"
          />
        </button>
        <button className="absolute top-[75px] right-[240px] border-none p-0 m-0 focus:outline-none">
          <img
            src="./assets/paradise-fall-house.png"
            alt="Paradise Fall House"
            className="w-[100px] hover:scale-105 transition-transform bg-transparent"
          />
        </button>
      </div>
    </div>
  );
};

export default Form;
