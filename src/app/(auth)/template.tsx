"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { id: 1, name: "Register", href: "/register" },
    { id: 2, name: "Login", href: "/login" },
    { id: 3, name: "Forget Password", href: "/forget-password" },
  ];

  const pathname = usePathname();

  const [input, setInput] = useState("");
  return (
    <section className="p-6">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 p-2.5 rounded-md shadow-sm"
        />
      </div>
      <div className="my-6 flex items-center gap-5">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={link.id}
              className={`${
                isActive ? "bg-black text-white border-none" : ""
              } border border-gray-500 rounded-sm py-2.5 px-6`}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </section>
  );
}
