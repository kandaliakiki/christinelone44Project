import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-black px-5  `} // adjust bg image size and position here
    >
      <div className="flex justify-between  mt-3">
        <div className="w-14 h-14 bg-[#EFEFEF] rounded-full flex items-center justify-center">
          <ChevronLeft color="#636363" size={32} className="mr-1"></ChevronLeft>
        </div>
        <div className="w-14 h-14 bg-[#3F3F3F] rounded-full flex items-center justify-center">
          <Image
            alt="menu-icon"
            src="/assets/menu-a4.svg"
            width={24}
            height={24}
          ></Image>
        </div>
      </div>
      <div className=" z-20">{children}</div>
    </main>
  );
}
