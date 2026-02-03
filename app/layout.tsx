import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Faizeen Hoque | Portfolio",
  description:
    "A collection of hardware and software creations by Faizeen Hoque",
  openGraph: {
    title: "Faizeen Hoque | Portfolio",
    description:
      "A collection of hardware and software creations by Faizeen Hoque",
    url: "https://faizeenhoque.xyz",
    siteName: "Faizeen Hoque Portfolio",
    images: [
      {
        url: "https://faizeenhoque.xyz/preview.png",
        width: 1200,
        height: 630,
        alt: "Faizeen Hoque Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizeen Hoque | Portfolio",
    description:
      "A collection of hardware and software creations by Faizeen Hoque",
    images: ["https://faizeenhoque.xyz/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelifySans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
