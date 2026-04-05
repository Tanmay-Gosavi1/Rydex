import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Provider from "@/wrappers/SessionProvider";
import ReduxWrapper from "@/wrappers/ReduxWrapper";
import InitUser from "./InitUser";


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
          <ReduxWrapper>
            <InitUser />
            {children}
          </ReduxWrapper>
        </Provider>
      </body>
    </html>
  );
}
