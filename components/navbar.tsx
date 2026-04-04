"use client";

import Link from "next/link";

import { navLinks } from "@/app/constant/Navlink";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="mx-auto w-full max-w-7xl items-center justify-center px-4 py-6">
        <div className="flex items-center justify-between space-x-2">
          <div>
            <Link href="/" className="flex items-center gap-2 p-4">
              <Leaf className="text-primary ml-8" />
              <h1 className="font-bold">Leaf Tech</h1>
            </Link>
          </div>

          <div className=" ">
            <ul className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? "text-primary font-semibold"
                        : "text-forground hover:text-primary/70 hover:opacity-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* <Link href="/">
                <li> Home </li>
              </Link>
              <Link href="/">
                <li> About </li>
              </Link>
              <Link href="/">
                <li> Skills </li>
              </Link>
              <Link href="/">
                <li> Projects </li>
              </Link>
              <Link href="/">
                <li> Contact </li>
              </Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
