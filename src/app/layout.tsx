import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}