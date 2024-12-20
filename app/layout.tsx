// layout.tsx >>> root layout
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TimerProvider } from "./contexts/TimerContext";
import { SearchElementProvider } from "./contexts/searchElementContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elementix",
  description: "A fun way to explore the periodic table of elements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchElementProvider>
        <TimerProvider>
          {children}
        </TimerProvider>
        </SearchElementProvider>
        
      </body>
    </html>
  );
}
