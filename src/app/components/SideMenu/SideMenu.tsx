'use client'
import React from "react";
import Button from "./../Button";

export default function SideMenu() {
  return (
    <ul className="w-64 h-[600px]">
      <li className="w-full h-[100px] border-b text-xl transition justify-center items-center flex bg-zinc-800 text-white font-bold hover:bg-zinc-700">
        Settings
      </li>
      <li className="w-full h-[100px] border-b text-xl transition justify-center items-center flex bg-zinc-800 text-white font-bold hover:bg-zinc-700">
        Profile
      </li>
      <li className="w-full h-[100px] border-b text-xl transition justify-center items-center flex bg-zinc-800 text-white font-bold hover:bg-zinc-700">
        Analytics
      </li>
      <li className="w-full h-[100px] border-b text-xl transition justify-center items-center flex bg-zinc-800 text-white font-bold hover:bg-zinc-700">
        Analytics
      </li>
      <li className="w-full h-[100px] border-b text-xl transition justify-center items-center flex bg-zinc-800 text-white font-bold hover:bg-zinc-700">
        Analytics
      </li>
      <Button label="click" onClick={() => alert("clicked from inside")} />
    </ul>
  );
}
