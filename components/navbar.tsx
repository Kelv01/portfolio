"use client";

import Link from "next/link";

import { navLinks } from "@/app/constant/Navlink";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="max-w-7xl w-full mx-auto py-6 px-4 items-center justify-center ">
        <div className="flex items-center justify-between space-x-2">
          <div>
            <Link href="/">
              <h1 className="font-bold">KELVIN</h1>
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
                        ? "text-primary font-semibold "
                        : " text-forground hover:text-primary/70 hover:opacity-100"
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
