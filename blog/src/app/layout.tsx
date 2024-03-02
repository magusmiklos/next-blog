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
      <h1 className="text-5xl font-bold mb-10 mt-10">
        Blog
      </h1>
    </Link>
  </div>);

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
      </body>
    </html>
  );
}
