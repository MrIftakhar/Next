'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}
        {
          pathname !== "/userList" ?
          <ul className="navbar">

          <li><Link href="/" className={`$(pathname === "/" ? "active": "")`}>Home</Link></li>
          <li><Link href="/about" className={`$(pathname === "/about" ? "active": "")`}>About</Link></li>
          <li><Link href="/userList" className={`$(pathname === "/userList" ? "active": "")`}>UserList</Link></li>
          <li>Contact</li>
          <li>SignUp</li>
        </ul> : <Link href='/'>Go Home</Link>
        }
      </body>
    </html>
  );
}
