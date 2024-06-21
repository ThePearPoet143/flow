import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AppTopbar from "@/components/shared/AppTopbar";
import AppBottombar from "@/components/shared/AppBottombar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-10 p-3 bg-white">
          {/* Top Bar Content */}
          <AppTopbar />
        </header>
        <main className="flex-1 overflow-y-auto mt-16 mb-20 ">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 right-0 h-20 z-10 border-t p-4 bg-white">
          {/* Bottom Bar Content */}
          <AppBottombar />
        </footer>
      </body>
    </html>
  );
}
