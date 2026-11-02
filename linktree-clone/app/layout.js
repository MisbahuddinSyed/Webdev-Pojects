import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import localFont from "next/font/local"

const poppins = localFont({
  src:[
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
})

export const metadata = {
  title: "BitLinks",
  description: "The best url shortner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${poppins.className} flex flex-col items-center`}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
