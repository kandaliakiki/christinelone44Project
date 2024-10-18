import TopLayout from "@/components/a17_1/TopLayout";
import { MoveLeft, Search, UserRound } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-mulish  flex-col overflow-auto h-screen bg-[#21181B] bg-gradient-to-br from-[#21181B] to-[#0D0408] pt-10   `} // adjust bg image size and position here
    >
      <div className="flex w-full justify-between items-center px-5">
        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
          <Image
            alt="menu icon"
            src="/assets/menu-a17-white.svg"
            width={16}
            height={16}
          ></Image>
        </div>
        <p className="text-white text-xl font-semibold">Statistics</p>
        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
          <Search size={20} color="#FFFFFF" opacity={0.7}></Search>
        </div>
      </div>
      <div className=" h-full ">{children}</div>
    </main>
  );
}
