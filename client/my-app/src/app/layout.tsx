import type { Metadata } from "next";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Acompanhe seu progresso e performance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
