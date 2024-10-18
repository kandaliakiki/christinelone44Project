import TopLayout from "@/components/a17_1/TopLayout";
import { MoveLeft, UserRound } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-mulish  flex-col overflow-auto h-screen bg-[#21181B] bg-gradient-to-br from-[#21181B] to-[#0D0408] pt-10 px-5  `} // adjust bg image size and position here
    >
      <div className="flex w-full justify-between items-center">
        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
          <MoveLeft size={20} color="#FFFFFF" opacity={0.7}></MoveLeft>
        </div>
        <p className="text-white text-xl font-semibold">Split Bill</p>
        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
          <UserRound size={20} color="#FFFFFF" opacity={0.7}></UserRound>
        </div>
      </div>
      <div className=" h-full ">{children}</div>
    </main>
  );
}
