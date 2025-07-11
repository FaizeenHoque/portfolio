import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import PageWrapper from "./components/PageWrapper";


const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faizeen Hoque || Portfolio",
  description: "a javascript wizardry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuSans.variable} antialiased`}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
