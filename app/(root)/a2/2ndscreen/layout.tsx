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
      className={`relative flex flex-col overflow-hidden min-h-screen bg-a2-background_2 bg-cover   `} // adjust bg image size and position here
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg z-10 bg-black bg-opacity-45"></div>
      <div className="">
        <MaskShapeBackground />
      </div>
      <div className="z-10">
        <TopLayout></TopLayout>
      </div>
      <div className="z-20">{children}</div>
    </main>
  );
}
