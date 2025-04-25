"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";

export default function Profile() {
  const { data: session, status } = useSession() as {
    data: Session | null;
    status: string;
  };

  if (status === "loading") return <p>Loading...</p>;
  if (!session)
    return (
      <div className="relative w-100 bg-linear-to-bl from-violet-500 to-fuchsia-500 h-150 justify-center items-center flex m-auto mt-20 rounded-2xl *:flex-col">
        <h1 className="font-bold absolute top-30 text-4xl text-zinc-900">
          Sign in
        </h1>
        <div className="flex-col flex gap-3 top-56 absolute">
          <div className="w-72 border p-3 rounded-full">
            <PersonIcon className="m-1 fill-zinc-900" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="w-72 border p-3 rounded-full">
            <VisibilityOffIcon className="m-1 fill-zinc-900" />
            <input type="password" placeholder="Password" id="password" />
          </div>
        </div>
        <button
          onClick={() => signIn()}
          className="w-72 p-5 rounded-b-full bg-zinc-900 text-white cursor-pointer absolute bottom-44"
        >
          Sign in with your social account?
        </button>
        <Image
          src="/assets/undraw_social_girl_re_kdrx.svg"
          alt="Social Illustration"
          width={200}
          height={200}
          className="absolute bottom-0"
        />
      </div>
    );

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
