// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { HeroUIProvider } from '@heroui/react';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Crowd Gather - Public Event Photo Sharing',
  description: 'Capture and share photos at public events',
  keywords: 'events, photo sharing, political events, public events',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen">
        <Suspense>
          <HeroUIProvider>{children}</HeroUIProvider>
        </Suspense>
      </body>
    </html>
  );
}
