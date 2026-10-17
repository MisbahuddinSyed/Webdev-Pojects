import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "BitLinks",
  description: "The best url shortner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="flex flex-col items-center bg-[#254f1a]">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
