import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t py-6 text-center text-gray-500 text-sm">
      <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
        Valyn Silva
      </span>
      &copy; {new Date().getFullYear()} All Rights Reversed
    </footer>
  );
}

export default Footer;
