import Footer from "./components/Footer ";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={inter.className}>
        <div className=" text-slate-800  bg-gray-100 dark:bg-zinc-900">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
