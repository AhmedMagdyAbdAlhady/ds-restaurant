import type { Metadata } from "next";
import localFont from "next/font/local";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "./component/bootstarpjs/bootstarpScript";
import '../node_modules/animate.css';
import dynamic from 'next/dynamic';
const WowJs = dynamic(
  ()=>import ( './component/wowjs/WowJs'),
  {
    ssr:false,
  }
)
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Bootstrap />
        <WowJs />
      </body>
    </html>
  );
}
