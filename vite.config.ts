import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: "/calm-pairs/",
  server: {
    open: true,
    port: 3001,
  },
  plugins: [
    createHtmlPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
});
