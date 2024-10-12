import TopLayout from "@/components/A10_1/TopLayout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-formaDJRMicro  flex-col overflow-hidden h-screen bg-[#0E0D0D] px-5 py-14 `} // adjust bg image size and position here
    >
      <h1 className="text-2xl text-white z-20">
        Tagana<span className="text-3xl font-light">&reg;</span>{" "}
      </h1>
      <div
        className="absolute top-0 left-0 w-full h-full bg-a11-background-heart
      bg-[center_top_-60px] bg-[length:1080px_1080px]   z-10"
      >
        <div className="relative w-full h-full">
          <div
            className="w-36 h-48 bg-girl1-background-dateapp absolute top-48 left-1/2 -translate-x-[90%] rounded-[2rem]
          bg-[left_-2rem_top_0px] bg-[length:200px_200px] -rotate-3
          "
          ></div>
          <div
            className="w-36 h-48 bg-girl2-background-dateapp absolute top-60 left-1/2 -translate-x-[15%] rounded-[2rem]
          bg-[left_-2rem_top_0px] bg-[length:200px_200px] rotate-6
          "
          ></div>
        </div>
      </div>
      <div className="z-20 ">{children}</div>
    </main>
  );
}
