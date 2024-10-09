import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-suezone flex-col overflow-auto min-h-screen bg-[#F1F1E0]  py-14 text-[#0E2432]`} // adjust bg image size and position here
    >
      <div className=" ">{children}</div>
    </main>
  );
}
