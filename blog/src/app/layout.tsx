"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const header = (
  <div className="flex justify-center">
    <Link href="/">
      <h1 className="text-5xl font-bold mb-10 sm:mt-10 mt-20 text-white">
        Blog
      </h1>
    </Link>
  </div>);

  const htmlClasses = " bg-gradient-radial from-blue-200 via-blue-100 to-white bg-cover h-auto min-h-screen dark:bg-gradient-radial dark:from-black dark:to-gray-900 overflow-auto"

  return (
    

    <html lang="en" 
    className={`${htmlClasses} ${darkMode ? "dark" : ""}`}>
      <body className={inter.className}>
        <div className="flex sm:flex-col justify-center h-full">
          <button 
          onClick={toggleDarkMode}
          className="sm:ml-10 mt-3 absolute w-16 h-10 bg-blue-200 dark:bg-gray-950 rounded-full font-bold text-white">{darkMode ? "Light" : "Dark"}</button>
          {header}
        </div>
        {children}
      </body>
    </html>
  );
}
