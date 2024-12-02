import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";

const jostBook = localFont({
  src: "./fonts/Jost-400-Book.otf",
  variable: "--font-jost-book",
});

const jostMedium = localFont({
  src: "./fonts/Jost-500-Medium.otf",
  variable: "--font-jost-medium",
});

const jostSemi = localFont({
  src: "./fonts/Jost-600-Semi.otf",
  variable: "--font-jost-semi",
});

const jostBold = localFont({
  src: "./fonts/Jost-700-Bold.otf",
  variable: "--font-jost-bold",
});

const jostHeavy = localFont({
  src: "./fonts/Jost-800-Heavy.ttf",
  variable: "--font-jost-heavy",
});

export const metadata: Metadata = {
  title: "Monapp",
  description:
    "The Financial solutions to power Africa's transportation future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jostBook.variable} ${jostMedium.variable} ${jostSemi.variable} ${jostBold.variable} ${jostHeavy.variable}`}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
