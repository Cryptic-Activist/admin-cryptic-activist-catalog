import { Roboto } from "@next/font/google";

import NavigationBar from "@/layout/NavigationBar";
import SideBar from "@/layout/SideBar";
import Footer from "@/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

import "./global.css";
import page from "./page.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <NavigationBar />
        <main className={page.main}>
          <SideBar />
          <div className={page.container}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
