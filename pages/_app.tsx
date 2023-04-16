import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";



// This is the chainId your dApp will work on.
const activeChainId = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="binance">
      <Head>
        <title>ES2 Raffle!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ES2 Raffle Ticket NFT drop, donate 1000 ES2 and mint a ticket to be entered into this round's drawing!"
        />
        <meta
          name="keywords"
          content="EverSafuV2, ES2, ES2 Crew, ES2 Raffle"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
