import Link from "next/link";
import React from "react";
import { BsDribbble, BsTwitter } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";
function Social() {
  return (
    <div className="flex flex-col space-y-5 verticalLine after:bg-black dark:text-slate-400 after:dark:bg-slate-400  ">
      <Link href="https://github.com/valyndsilva" target="_blank">
        <a>
          <FiGithub className="socialIcons" />
        </a>
      </Link>
      <Link href="https://linkedin.com/valyndsilva" target="_blank">
        <a>
          <FiLinkedin className="socialIcons" />
        </a>
      </Link>
      <Link href="https://dribbble.com/valyndsilva" target="_blank">
        <a>
          <BsDribbble className="socialIcons" />
        </a>
      </Link>

      <Link href="https://twitter.com/valyndsilva" target="_blank">
        <a>
          <BsTwitter className="socialIcons" />
        </a>
      </Link>
      <Link href="https://codepen.io/valyndsilva" target="_blank">
        <a>
          <FiCodepen className="socialIcons" />
        </a>
      </Link>
    </div>
  );
}

export default Social;
