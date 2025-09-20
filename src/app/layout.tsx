import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduSphere",
  description:
    "EduSphere is an all-in-one online learning platform offering diverse courses, interactive lessons, quizzes, and industry-recognized certificates to help you learn, practice, and grow anytime, anywhere.",
};

import { NuqsAdapter } from "nuqs/adapters/next";
import { Navbar } from "@/components/custom/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body className={`${inter.variable} antialiased`}>
        <NuqsAdapter>
          <Navbar />
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
