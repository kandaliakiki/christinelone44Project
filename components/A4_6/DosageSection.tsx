import React from "react";

const DosageSection = () => {
  return (
    <div className="flex justify-between mt-10">
      <div>
        <p className="text-white text-8xl ">145</p>
        <p className="text-zinc-500 ml-2">mg/dl</p>
      </div>

      <div className="relative p-0  flex justify-center items-center">
        <svg
          width="166"
          height="80"
          viewBox="0 0 166 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-125"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#383838" /> {/* Purple */}
              <stop offset="100%" stopColor="#454545" /> {/* Pink */}
            </linearGradient>
          </defs>
          <path
            d="M150.008 0H15.9917C6.96926 0 -0.0115343 7.90773 1.10757 16.8605L7.35756 66.8605C8.29587 74.367 14.6769 80 22.2417 80H143.758C151.323 80 157.704 74.3669 158.642 66.8605L164.892 16.8605C166.012 7.90772 159.031 0 150.008 0Z"
            fill="url(#gradient1)"
          />
        </svg>
        <div className="flex absolute justify-center items-center gap-3">
          <p className="leading-none text-black font-semibold text-lg">
            Last<br></br>Dosage
          </p>
          <p className="text-5xl text-white ">1.5U</p>
        </div>
      </div>
    </div>
  );
};

export default DosageSection;
