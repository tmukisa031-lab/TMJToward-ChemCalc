"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-black">
      <Link href="/">Home</Link>
      <Link href="/calculator">Calculator</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}