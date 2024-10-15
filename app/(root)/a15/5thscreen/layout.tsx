import TopLayout from "@/components/A14_1/TopLayout";
import BottomLayout from "@/components/A15_5/BottomLayout";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-nunitoSans tracking-tighter flex-col overflow-auto h-screen bg-[#EDEBE9]  `} // adjust bg image size and position here
    >
      <div className=" h-full ">{children}</div>
      <BottomLayout />
    </main>
  );
}
