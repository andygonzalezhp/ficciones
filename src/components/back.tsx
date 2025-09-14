"use client";

import Link from "next/link";

export default function Back({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-block mb-6 text-2xl select-none focus:outline-none no-underline hover:opacity-80"
      style={{ textDecoration: "none" }}
    >
      ←
    </Link>
  );
}
