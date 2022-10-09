import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide splash screen when we are server side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader != null) loader.style.display = "none";
    }
  }, []);

  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
