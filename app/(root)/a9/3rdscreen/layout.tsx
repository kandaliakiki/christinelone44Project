import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-overusedGrotesk flex-col overflow-hidden min-h-screen bg-black px-5 py-5 `} // adjust bg image size and position here
    >
      <div className=" ">{children}</div>
    </main>
  );
}
