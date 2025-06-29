// components/OrbitCard.tsx
import { useEffect, useState } from "react";

export default function OrbitCard() {
  const [angle, setAngle] = useState(0);
  const radius = 75; 

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360);
    }, 30); 
    return () => clearInterval(interval);
  }, []);

  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div className=" rounded-lg w-64 h-64 flex items-center justify-center  relative">
      <div className="absolute w-[160px] h-[160px] rounded-full border border-gray-300" />

      <div
        className="absolute"
        style={{
          left: `calc(50% + ${x}px - 12px)`,
          top: `calc(50% + ${y}px - 12px)`,
        }}
      >
        <div
          className="w-6 h-6 "
          style={{
            transform: `rotate(${angle + 90}deg)`, 
            transformOrigin: "center center",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="w-6 h-6"
          />
        </div>
      </div>

      <h1 className="text-xl font-bold px-1 py-1 border-[1px] bg-gray-200 border-gray-300 rounded-4xl text-center z-10">mI.<span className="text-black">BloG</span></h1>
    </div>
  );
}
