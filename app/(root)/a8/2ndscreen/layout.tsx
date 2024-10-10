import BottomLayout from "@/components/A8_1/BottomLayout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-suisseIntl flex-col overflow-hidden min-h-screen  bg-gradient-to-b from-[#9BAFAE] to-[#EAE8D8]  py-14 `} // adjust bg image size and position here
    >
      <div className=" ">{children}</div>
    </main>
  );
}
