import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidenavbar from "../components/Sidenavbar";
import { Suspense } from "react";
import Loading from "../components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddhant Antil",
  description: "Work by Siddhant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} px-4`}>
      <Header />
      <div className="md:mx-auto w-full px-4">
        <div className="flex flex-col md:flex-row">
          <aside className="hidden md:block md:w-1/4">
            <Sidenavbar />
          </aside>
          <main className="flex-1 w-full md:w-3/4">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}