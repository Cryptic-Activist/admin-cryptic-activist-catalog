"use client";

import { Montserrat } from "@next/font/google";

import Footer from "@/layout/Footer";
import { LoginForm, RegisterForm } from "@/layout/Modals";
import NavigationBar from "@/layout/NavigationBar";
import SideBar from "@/layout/SideBar";

import { useAdmin, useNavigationBar } from "@/hooks";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

import "./global.css";
import layout from "./layout.module.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { navigationBar } = useNavigationBar();
  const { admin } = useAdmin();

  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        {navigationBar.modals.login && <LoginForm />}
        {navigationBar.modals.register && <RegisterForm />}
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
