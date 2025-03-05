// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Eventrue - Public Event Photo Sharing",
  description: "Capture et partage de photos lors d'événements politiques",
  keywords: "événements politiques, partage de photos, débats politiques, meetings politiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light crowd-gather-theme">
      <body className={`min-h-screen `}>
        <Suspense>
          <HeroUIProvider>{children}</HeroUIProvider>
        </Suspense>
      </body>
    </html>
  );
}