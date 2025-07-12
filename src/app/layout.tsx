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
  description: "A full-stack developer and AI enthusiast building the future.",
  openGraph: {
    title: "Faizeen Hoque || Portfolio",
    description: "A full-stack developer and AI enthusiast building the future.",
    url: "https://faizeenhoque.xyz",
    siteName: "Faizeen Hoque",
    images: [
      {
        url: "https://faizeenhoque.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faizeen Hoque Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizeen Hoque || Portfolio",
    description: "A full-stack developer and AI enthusiast building the future.",
    images: ["https://faizeenhoque.xyz/og-image.png"],
  },
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
