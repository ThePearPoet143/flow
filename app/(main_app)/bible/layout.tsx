import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import BibleHeaderbar from "@/components/shared/BibleHeaderbar";
import { BibleBottombar } from "@/components/shared/BibleBottombar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        {/* add motion divs to Header and Bottom */}
        {/* <div className="bg-white">
            <BibleHeaderbar />
        </div> */}
        {/* children stay in middle container */}
        <div className="pt-10 pb-20">
        {children}
        </div>
        {/* <BibleBottombar /> */}
        </div>
  );
}
