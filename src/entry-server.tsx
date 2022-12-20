import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";
import { ContextWrapper } from "~/context/Context";
import { AuthContextWrapper } from "~/context/auth";
// import 'antd/dist/reset.css'
import "@unocss/reset/tailwind.css";
import "./index.css";
import "uno.css";

export function render(url: string) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <ContextWrapper>
          <AuthContextWrapper>
            <App />
          </AuthContextWrapper>
        </ContextWrapper>
      </StaticRouter>
    </React.StrictMode>
  );
}
