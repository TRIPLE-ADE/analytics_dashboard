import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
