import { resolve } from 'path'

export default {
  base: '/python31-vite/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        snake: resolve(__dirname, 'snake.html'),
        // @ts-ignore
        store: resolve(__dirname, 'store.html'),
        // @ts-ignore
        korzina: resolve(__dirname, 'korzina.html'),
        // @ts-ignore
        omdb: resolve(__dirname, 'omdb.html'),
        // @ts-ignore
        yaPic: resolve(__dirname, 'yapic.html'),
        // @ts-ignore
        server: resolve(__dirname, 'server.html'),
      }
    }
  }
}
