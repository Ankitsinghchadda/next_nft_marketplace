import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from "../components/header/Navbar";
import "../styles/globals.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, sepolia } from "wagmi/chains";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/46824/nft-marketplace/v0.0.1",
});

const chains = [arbitrum, mainnet, polygon, sepolia];
const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </ApolloProvider>
  );
}
