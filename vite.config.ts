import path from "path";
import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

import type { UserConfig } from "vitest/config";

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["tests/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

// https://vitejs.dev/config/
export default defineConfig({
  // 开发或生产环境服务的公共基础路径
  base: "/",
  // 项目根目录
  root: "./",
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    React(),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
  server: { port: 3000 },
  build: {
    minify: false,
  },

  // @ts-expect-error // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  test,
});
