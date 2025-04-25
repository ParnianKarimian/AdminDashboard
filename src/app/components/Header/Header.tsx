"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="relative w-full h-[130px]">
      <button
        onClick={() => router.push("/login")}
        className="bg-blue-600 text-white p-2 rounded justify-center items-center flex absolute right-[700px] top-10"
      >
        Go to Login
      </button>
    </div>
  );
}
