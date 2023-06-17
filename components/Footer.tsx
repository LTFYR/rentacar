import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 text-black-100 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start gap-6 items-start ">
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Rental Car's Logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <span className="font-extrabold text-2xl text-red-600">LFyr</span>
          </div>
          <p className="text-base text-gray-700">
            LFyr Rental 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((flink) => (
            <div key={flink.title} className="footer__link">
              <h3 className="font-bold">{flink.title}</h3>
              {flink.links.map((link) => (
                <Link
                  href={link.url}
                  className="text-gray-500"
                  key={link.title}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 LFyr. All rights resevred</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms and Rights
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
