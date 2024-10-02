import LeftLayout from "@/components/A2/LeftLayout";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-hero-a1-background bg-no-repeat  bg-gray-theme-a1  
        bg-[center_top_5px] bg-[length:840px_840px] `} // adjust bg image size and position here
    >
      <div className="fixed    inset-0 z-0 opacity-40 bg-black "></div>
      <div className="fixed left-[-20%] top-1/2 transform -translate-y-1/2 z-10">
        <LeftLayout />
      </div>
      <div className=" z-20">{children}</div>
    </main>
  );
}
