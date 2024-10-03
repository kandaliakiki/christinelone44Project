import MaskShapeBackground from "@/components/A2_2/MaskShapeBackground";
import TopLayout from "@/components/A2_2/TopLayout";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-hidden min-h-screen bg-black   `} // adjust bg image size and position here
    >
      <div className="relative">
        <MaskShapeBackground />
      </div>
      <div className="z-10">
        <TopLayout></TopLayout>
      </div>
      <div className="z-20">{children}</div>
    </main>
  );
}
