import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsWhatsapp, BsMessenger } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";
function Footer() {
  return (
    <footer className="w-[80vw z-20 dark:text-slate-400 font-firacode ">
    <Fade bottom duration={1000}>
      <div className="px-5 py-10 mx-auto items-center">
        <p className="text-sm w-full  mt-10 mb-16 flex items-center justify-center text-center">
          © 2022 Valyn Silva.
        </p>
      </div>
      </Fade>
    </footer>
  );
}

export default Footer;
