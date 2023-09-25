import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import { createPublicClient, http } from "viem";
import { Home, CreateBattle, JoinBattle, Battle } from "./page";
import { GlobalProvider } from "./context";
import "./index.css";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: sepolia,
    transport: http(),
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={config}>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-battle" element={<CreateBattle />} />
          <Route path="/join-battle" element={<JoinBattle />} />
          <Route path="/battle/:battleName" element={<Battle />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </WagmiConfig>
);
