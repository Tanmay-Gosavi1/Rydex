import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Provider from "@/libs/Provider";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['400', '500'], // Choose weights you need
  display: 'swap', // Improves rendering
});


export const metadata: Metadata = {
  title: "Rydex",
  description: "Online vehicle booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
