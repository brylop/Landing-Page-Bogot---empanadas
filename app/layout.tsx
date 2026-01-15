import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empanadas a Domicilio en Bogotá | Empanadas Gourmet",
  description: "Las mejores empanadas artesanales de Bogotá. Masa crujiente, relleno abundante y envío rápido a Chapinero, Usaquén y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
