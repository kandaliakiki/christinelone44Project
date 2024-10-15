import React from "react";

const ChatSection = () => {
  return (
    <div className="px-5">
      <p className="text-center text-sm text-black/50 font-semibold mt-3">
        Today
      </p>
      <div className="w-full flex flex-col  mt-3 tracking-tight">
        <div className="self-end flex flex-col gap-2">
          <div className="py-3 px-3 bg-[#F2681B] text-white w-max max-w-56 rounded-xl rounded-br-none text-sm">
            <p className="font-light">Hi there! How's it going?</p>
          </div>
          <p className="text-xs font-semibold text-black/50 text-right">
            Read 11:02 AM
          </p>
        </div>
        <div className="mt-1">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <div className="py-3 px-3 bg-[#EAE8E7] font-light text-black w-max max-w-56 rounded-xl rounded-bl-none text-sm">
                <p>Hey! I'm doing well, thanks for asking.</p>
              </div>
              <div className="py-3 px-3 bg-[#EAE8E7] font-light text-black w-max max-w-56 rounded-xl rounded-bl-none text-sm">
                <p>How about you?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end flex flex-col gap-2 mt-4">
          <div className="py-3 px-3 bg-[#F2681B] text-white w-max max-w-56 rounded-xl rounded-br-none text-sm">
            <p className="font-light">
              Great, thanks. I noticed that you like going to concerts.
            </p>
          </div>
          <div className="py-3 px-3 bg-[#F2681B] text-white w-max max-w-56 rounded-xl rounded-br-none text-sm">
            <p className="font-light">
              Have you been to any good shows recently?
            </p>
          </div>
          <p className="text-xs font-semibold text-black/50 text-right">
            Read 11:06 AM
          </p>
        </div>
        <div className="mt-1">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <div className="py-3 px-3 bg-[#EAE8E7] font-light text-black w-max max-w-56 rounded-xl rounded-bl-none text-sm">
                <p>Yes, I actually went to a great show last weekend.</p>
              </div>
              <div className="py-3 px-3 bg-[#EAE8E7] font-light text-black w-max max-w-56 rounded-xl rounded-bl-none text-sm">
                <p>It was amazing.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end flex flex-col gap-2 mt-4">
          <div className="py-3 px-3 bg-[#F2681B] text-white w-max max-w-56 rounded-xl rounded-br-none text-sm">
            <p className="font-light">
              That sounds like a lot of fun! Would you like to go together
              sometime?
            </p>
          </div>
          <p className="text-xs font-semibold text-black/50 text-right">
            Read 11:08 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
