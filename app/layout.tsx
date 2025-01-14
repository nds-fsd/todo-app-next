import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {connect} from "@/domain/connection";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <nav className="flex items-center justify-between w-full bg-orange-300">
      <h1 className="text-4xl font-bold">TODO APP</h1>
      <button className="px-2 py-1 bg-red-500 text-white rounded-md">Logout</button>
    </nav>
    {children}

    </body>
    </html>
  );
}
