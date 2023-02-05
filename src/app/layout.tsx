"use client";

import { Montserrat } from "@next/font/google";
import { useStore } from "@nanostores/react";

import NavigationBar from "@/layout/NavigationBar";
import SideBar from "@/layout/SideBar";
import Footer from "@/layout/Footer";
import { LoginForm } from "@/layout/Modals";

import { useAdmin } from "@/hooks";
import { navigationBar } from "@/stores/navigationBar";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

import "./global.css";
import layout from "./layout.module.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const $navigationBar = useStore(navigationBar);
  const { admin } = useAdmin();

  console.log($navigationBar);

  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        {$navigationBar.modals.login && <LoginForm />}
        <NavigationBar />
        <main className={layout.main}>
          <SideBar />
          <div className={layout.container}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
