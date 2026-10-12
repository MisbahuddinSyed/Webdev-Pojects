import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "BitLinks",
  description: "The best url shortner",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >

      <body className="min-h-full flex flex-col bg-green-100">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
