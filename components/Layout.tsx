import React from "react";
import Head from "next/head";

interface Props {
  children?: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Valyn Silva | UI/UX Designer & Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Valyn Silva | UI/UX Designer & Front-End Developer"
        />
      </Head>
      <div className="flex flex-col h-screen  overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  scrollbar-track-slate-500/20 scrollbar-thumb-teal-400/80 snap-y snap-mandatory">
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
