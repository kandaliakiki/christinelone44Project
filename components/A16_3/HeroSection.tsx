import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="w-[355.69px] h-[355.69px] flex justify-center items-center ">
      <svg width="0" height="0">
        <defs>
          <clipPath id="clipShape">
            {/* Replace the existing path with the new SVG shape */}
            <rect
              x="108.682"
              y="0.308594"
              width="352.629"
              height="148.475"
              rx="74.2377"
              transform="rotate(45.5449 108.682 0.308594)"
              fill="#D9D9D9"
            />
            <rect
              x="356.536"
              y="107.663"
              width="352.629"
              height="148.475"
              rx="74.2377"
              transform="rotate(135.545 356.536 107.663)"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>
      <div
        className="w-full h-full bg-forest-background-a16 bg-[left_0px_top_0px] bg-[length:400px_400px]"
        style={{ clipPath: "url(#clipShape)" }} // Keep the background and apply the new clip path
      ></div>
    </div>
  );
};

export default HeroSection;
