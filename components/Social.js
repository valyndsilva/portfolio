import Link from "next/link";
import React from "react";
import { BsLinkedin, BsDribbble, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";
function Social() {
  return (
    <div className="space-y-5 verticalLine after:bg-black dark:text-slate-400 after:dark:bg-slate-400  ">
      <Link
        href="https://github.com/valynsilva"
        target="_blank"
      >
        <FiGithub className="socialIcons" />
      </Link>
      <Link href="https://linkedin.com/valynsilva" target="_blank">
        <FiLinkedin className="socialIcons" />
      </Link>
      <Link href="https://dribbble.com/valynsilva" target="_blank">
        <BsDribbble className="socialIcons" />
      </Link>

      <Link href="https://twitter.com/valynsilva" target="_blank">
        <BsTwitter className="socialIcons" />
      </Link>
      <Link href="mailto:valynsilva@gmail.com" target="_blank">
        <SiGmail className="socialIcons" />
      </Link>
    </div>
  );
}

export default Social;
