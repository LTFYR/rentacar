import React from "react";
import Link from "next/link";
import Image from "next/image";

import RedButton from "./RedButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-20">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.jpg"
            alt="Rental Car's Logo"
            width={118}
            height={118}
            className="object-contain"
          />
          <span className="font-extrabold text-2xl text-red-600">LFyr</span>
        </Link>
        <RedButton
          title="Sign in"
          format="button"
          customStyles="text-gray rounded-full bg-white min-w-[130px]  border border-red-600"
        />
      </nav>
    </header>
  );
};

export default Navbar;
