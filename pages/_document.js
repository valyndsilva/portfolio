import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Inter:wght@300;400;500;600;700&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      </body>
    </Html>
  );
}
