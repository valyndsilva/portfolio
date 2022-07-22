import Head from "next/head";
import { Header, Hero, Footer } from "./";

const Layout = ({ children }) => {
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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
