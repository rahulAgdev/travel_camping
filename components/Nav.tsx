"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex-between max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={74} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle((prev) => !prev)}
      /> */}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />
      {toggle && (
        <div className="dropdown">
          <ul className="flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={() => setToggle(false)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
