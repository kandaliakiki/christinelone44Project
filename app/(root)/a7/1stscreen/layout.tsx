import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-suezone flex-col overflow-auto min-h-screen bg-[#F1F1E0] px-5 py-14 text-[#0E2432]`} // adjust bg image size and position here
    >
      <h1 className="text-2xl">PurrChat&reg; </h1>

      <div className=" ">{children}</div>
    </main>
  );
}
