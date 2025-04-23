"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <button onClick={() => signIn()}>Sign in</button>;

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
