import type { Metadata } from "next";
import { ABeeZee, Quicksand, } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "./context/ProjectContext";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ['400', '600'],
  subsets: ["latin"],
});

const abeezee = ABeeZee({
  variable: "--font-abee-zee",
  subsets: ["latin"],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Portfolio - Test Version",
  description: "Know more about me from my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${abeezee.variable} antialiased`}
      >
        <ProjectProvider>

          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
