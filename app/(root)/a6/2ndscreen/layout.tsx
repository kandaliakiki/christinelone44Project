import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-lufga flex-col overflow-auto min-h-screen bg-[#0C0C0C] px-5  `} // adjust bg image size and position here
    >
      <div className="flex justify-between items-center  mt-10 text-white">
        <ChevronLeft color="#ffffff" size={32} className="mr-1"></ChevronLeft>
        <p className="text-xl ">matches</p>
        <div
          className="relative w-10 h-10  rounded-full overflow-hidden  self-center mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]"
        ></div>
      </div>

      <div className=" ">{children}</div>
    </main>
  );
}
