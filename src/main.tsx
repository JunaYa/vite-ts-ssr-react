import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ConfigProvider from "antd/es/config-provider";
import { App } from "~/App";
import { AuthContextWrapper } from "~/context/auth";
// import 'antd/dist/reset.css'
import "@unocss/reset/tailwind.css";
import "./index.css";
import "uno.css";

const rootDom = document.getElementById("app");
const root = createRoot(rootDom!);
root.render(
  <ConfigProvider theme={{}}>
    <AuthContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextWrapper>
  </ConfigProvider>
);
