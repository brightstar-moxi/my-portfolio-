import { Inter } from "next/font/google";
import "./globals.css";
import AdSense from "./components/Adsense";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "This is a description about me and My Profession, do well by viewing my platform, send a message through d platform and share my link to ur friends, THANK YOU!!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <AdSense pId="ca-pub-7511126905302510"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
