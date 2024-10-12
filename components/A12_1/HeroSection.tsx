import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="w-[447px] h-[370px]  pt-10">
      <svg width="0" height="0">
        <defs>
          <clipPath id="clipShape">
            <path d="M223.238 223.238L171.522 274.953C155.901 290.574 130.574 290.574 114.953 274.953L11.7157 171.716C-3.90524 156.095 -3.90524 130.768 11.7157 115.147L114.953 11.9095C130.574 -3.71136 155.901 -3.71136 171.522 11.9095L223.044 63.4315L274.759 11.7156C290.38 -3.90521 315.707 -3.90521 331.328 11.7156L434.566 114.953C450.187 130.574 450.187 155.901 434.566 171.522L331.328 274.76C315.707 290.38 290.38 290.38 274.759 274.76L223.238 223.238Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className=" w-full h-full bg-a12-background-couple bg-[left_-18px_top_0px] bg-[length:450px_350px]"
        style={{ clipPath: "url(#clipShape)" }}
      ></div>
    </div>
  );
};

export default HeroSection;
