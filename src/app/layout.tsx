import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Components/NavBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal Kumar",
  description: "Vishal Kumar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
