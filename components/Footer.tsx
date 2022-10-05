import React from "react";
import { motion } from "framer-motion";

type Props = {
  footerRef: any;
};

function Footer({ footerRef }: Props) {
  // 👇️ Get current Year
  const currentYear = new Date().getFullYear();
  // console.log(currentYear);
  return (
    <footer
      id="footer"
      ref={footerRef}
      className="w-[80vw z-20 dark:text-slate-400 font-firacode "
    >
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: false }}
        className="px-5 py-10 mx-auto items-center"
      >
        <p className="text-sm w-full  mt-10 mb-16 flex items-center justify-center text-center">
          © {currentYear} Valyn Silva.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
