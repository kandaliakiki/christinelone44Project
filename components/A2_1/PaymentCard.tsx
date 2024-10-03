import React from "react";

const PaymentCard = ({
  arrowDirection,
}: {
  arrowDirection: "left" | "right";
}) => {
  return (
    <div className="flex w-36 gap-1  justify-between font-schibstedGrotesk">
      <div
        className="relative w-12 h-12  rounded-full overflow-hidden  self-center mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:60px_60px]"
      ></div>
      <div className="flex-1 px-1">
        <div className="flex  w-full  justify-between items-center">
          <p className="mr-1 text-[11px] text-[#7C7B7E]">USD</p>
          <p className="text-xl -translate-y-[3px] mr-2">
            {arrowDirection === "right" ? (
              <span>&rarr;</span>
            ) : (
              <span>&larr;</span>
            )}
          </p>
        </div>
        <p className="text-base -mt-2 tracking-wider">-$278.32</p>
        <p className="text-[#27617b] text-[10px] -mt-1">Today 17.45</p>
      </div>
    </div>
  );
};

export default PaymentCard;
