import TopLayout from "@/components/A14_1/TopLayout";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-dmSans  flex-col overflow-auto h-screen bg-[#0c1115]  py-12 `} // adjust bg image size and position here
    >
      <div className=" h-full">{children}</div>
    </main>
  );
}
