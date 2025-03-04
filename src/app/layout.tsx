import "./globals.css";
import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/react";

export const metadata: Metadata = {
  title: "Crowd Gather - Public Event Photo Sharing",
  description: "Share and capture moments at public events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light crowd-gather-theme">
      <body className="min-h-screen">
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}