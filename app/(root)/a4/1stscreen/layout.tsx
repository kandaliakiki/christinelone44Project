import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-[#DC5049]  `} // adjust bg image size and position here
    >
      <div className=" z-20">{children}</div>
    </main>
  );
}
