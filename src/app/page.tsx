import React from "react";
import Link from "next/link";
import Header from "./components/Header/Header";
import DashboardPage from "./dashboard/Dashboard";
import SideMenu from "./components/SideMenu/SideMenu";
import Login from "./login/Login";
import BarChart from "./components/BarChart";
import Button from './components/Button';

export const metadata = {
  title: "My App",
  description: "Using NextAuth",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-[700px] h-full relative">
      <SideMenu />
        <div className="w-[70rem] h-[550px] ml-72 absolute top-5">
          <BarChart />
        </div>
      </main>
    </>
  );
}
