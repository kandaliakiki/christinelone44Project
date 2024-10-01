import React from "react";

const LeftAndRightLayout = ({ position }: { position: "left" | "right" }) => {
  const containerClass =
    position === "left" ? "left-container-shape" : "right-container-shape";

  return (
    <div className="custom-shape relative">
      <div className=" w-full">
        <div className={containerClass}>
          <div className=" -top-[10%] absolute z-20 "></div>
        </div>
      </div>
    </div>
  );
};

export default LeftAndRightLayout;
