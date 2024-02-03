import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhiya Adli | Portofolio",
  description:
    "Embark on a visual journey through my portfolio web app, a dynamic showcase meticulously crafted to provide a captivating glimpse into who I am. Immerse yourself in fully animated aesthetics that elevate the user experience, seamlessly blending creativity with functionality. Explore sections that unravel my skills, experiences, and projects, creating an engaging narrative that reflects my passion and proficiency. From the fluid transitions to the animated elements, this website not only serves as a digital resume but also as a testament to my commitment to delivering visually stunning and interactive online experiences. Discover the essence of my professional journey and skills through an aesthetically pleasing and technologically advanced portfolio that reflects both form and substance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen min-h-screen bg-[#E9E4E0] text-[#060100] overflow-x-hidden ${inter.className}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
