import Link from "next/link";
import React from "react";
import { BsLinkedin, BsDribbble, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";
function Social() {
  return (
    <div className="flex flex-col space-y-5 verticalLine after:bg-black dark:text-slate-400 after:dark:bg-slate-400  ">
      <Link href="https://github.com/valynsilva" target="_blank">
        <a>
          <FiGithub className="socialIcons" />
        </a>
      </Link>
      <Link href="https://linkedin.com/valynsilva" target="_blank">
        <a>
          <FiLinkedin className="socialIcons" />
        </a>
      </Link>
      <Link href="https://dribbble.com/valynsilva" target="_blank">
        <a>
          <BsDribbble className="socialIcons" />
        </a>
      </Link>

      <Link href="https://twitter.com/valynsilva" target="_blank">
        <a>
          <BsTwitter className="socialIcons" />
        </a>
      </Link>
      <Link href="mailto:valynsilva@gmail.com" target="_blank">
        <a>
          <SiGmail className="socialIcons" />
        </a>
      </Link>
    </div>
  );
}

export default Social;
