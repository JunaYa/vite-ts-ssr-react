import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ConfigProvider from "antd/es/config-provider";
import { App } from "./App";
import { AuthContextWrapper } from "~/context/auth";
// import 'antd/dist/reset.css'
import "@unocss/reset/tailwind.css";
import "./index.css";
import "uno.css";
const container = document.getElementById("app");

const FullApp = () => (
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {},
        components: {},
      }}
    >
      <BrowserRouter>
        <AuthContextWrapper>
          <App />
        </AuthContextWrapper>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
