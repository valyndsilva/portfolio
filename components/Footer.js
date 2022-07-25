import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsWhatsapp, BsMessenger } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
function Footer() {
  return (
    <footer class="w-[80vw] mt-5 z-20 dark:text-slate-400 font-firacode ">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p class="text-sm w-full  mt-10 mb-16 flex items-center justify-center text-center">
          © 2022 Valyn Silva
        </p>
        {/* <span class="inline-flex space-x-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://twitter.com/valynsilva" target="_blank">
            <a>
              <BsWhatsapp className="socialIcons" />
            </a>
          </Link>
          <Link href="https://linkedin.com/valynsilva" target="_blank">
            <a>
              <FiLinkedin className="socialIcons" />
            </a>
          </Link>
          <Link href="mailto:valyndsilva@gmail.com" target="_blank">
            <a>
              <SiGmail className="socialIcons" />
            </a>
          </Link>
          <Link href="https://twitter.com/valynsilva" target="_blank">
            <a>
              <BsMessenger className="socialIcons" />
            </a>
          </Link>
          <Link href="https://twitter.com/valynsilva" target="_blank">
            <a>
              <BsTwitter className="socialIcons" />
            </a>
          </Link>
        </span> */}
      </div>
    </footer>
  );
}

export default Footer;
