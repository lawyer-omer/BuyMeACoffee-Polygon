import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Buy me a coffee"
        titleTemplate="Buy me a coffee"
        defaultTitle="Buy me a coffee"
        description="Omer's buy me a coffee on Polygon"
        canonical="https://twitter.com/nftlernet"
        openGraph={{
          url: "https://twitter.com/nftlernet",
          title: "Buy me a coffee",
          description: "Omer's buy me a coffee on Polygon",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: `Buy me a coffee`,
            },
          ],
        }}
        twitter={{
          handle: "@nftlernet",
          site: "@nftlernet",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
