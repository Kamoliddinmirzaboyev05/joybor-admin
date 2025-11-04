// app/layout.tsx

import { Toaster } from "sonner";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JoyBor Admin Panel",
  description: "Talabalar yotoqxonasini boshqarish tizimi",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Toaster position="top-center" duration={2000} />
        {children}
      </body>
    </html>
  );
}
