import LeftAndRightLayout from "@/components/A1/LeftAndRightLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`flex flex-col overflow-auto min-h-screen bg-gray-theme-a1`}
    >
      <div className="fixed left-[-60%] top-1/2 transform -translate-y-1/2 z-10">
        <LeftAndRightLayout position="left" />
      </div>

      {children}

      <div className="fixed right-[-60%] top-1/2 transform -translate-y-1/2">
        <LeftAndRightLayout position="right" />
      </div>
    </main>
  );
}
