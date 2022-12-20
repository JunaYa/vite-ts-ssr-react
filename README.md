# Vite Typescript React 18 SSR

[![Node CI](https://github.com/junaya/vite-ts-ssr-react/actions/workflows/nodejs.yml/badge.svg)](https://github.com/junaya/vite-ts-ssr-react/actions/workflows/nodejs.yml)

A _blazingly_ modern web development stack. This template repo tries to achieve the minimum viable example for each of the following:

- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Typescript 4.9](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/)
- [Vite with Vite SSR](https://vitejs.dev/guide/ssr.html)
- [UnoCSS](https://github.com/unocss/unocss)
- [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)
- [GitHub Actions](https://github.com/features/actions)

## Development

```
pnpm
pnpm dev:server
```

That should start the server. It will open to http://localhost:7456.

If you'd like to just develop the UI, you can use

```bash
pnpm
pnpm dev:client
```

To start the native vite client.

## Building

```
pnpm build
pnpm serve
```

## CI

We use GitHub actions to build the app. The badge is at the top of the repo. Currently it just confirms that everything builds properly.

## feature
