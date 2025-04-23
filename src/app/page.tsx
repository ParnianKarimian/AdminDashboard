import React from "react";
import Link from "next/link";
import Header from "./components/Header/Header";
import DashboardPage from "./dashboard/Dashboard";
import SideMenu from "./components/SideMenu/SideMenu";
export const metadata = {
  title: 'My App',
  description: 'Using NextAuth',
};


export default function Home() {
  return (
    <>
      <main className='w-200 h-200 bg-pink-950 text-white'>
        <Header />
        <SideMenu />
        <DashboardPage />
      </main>
    </>
  );
}
