import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import BibleHeaderbar from "@/components/shared/BibleHeaderbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <div className="bg-white pt-10">
            <BibleHeaderbar />
        </div>
        {children}
        </div>
  );
}
