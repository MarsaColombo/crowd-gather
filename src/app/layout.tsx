import "./globals.css";

export const metadata = {
  title: "Eventrue - Public Event Photo Sharing",
  description: "Take and share photos at public events",
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