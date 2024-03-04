import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blog",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const header = (<div className="flex justify-center">
    <Link href="/">
      <h1 className="text-5xl font-bold mb-10 mt-10 text-white">
        Blog
      </h1>
    </Link>
  </div>);

  return (
    <html lang="en" className="bg-gradient-radial from-blue-200 via-blue-100 to-white bg-cover h-auto min-h-screen dark:bg-gradient-radial dark:from-black dark:to-gray-900 overflow-auto">
      <body className={inter.className}>
        {header}
        {children}
      </body>
    </html>
  );
}
