import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>

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
          content="ES2 50/50 Raffle. There will be 100 tickets per raffle. 1 ticket is good for 1 entry into each drawing. Drawings will occur once all 100 tickets have been minted. Proceeds from the raffle are distributed as such: 50% to the Fire Pit and 50% to one random ticket holder. in other words 50k ES2 to Fire Pit and 50k ES2 to winner of raffle. Buy as many as you want however, they are limited to 100 per round. 1000 ES2 donation per Ticket is required."
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
