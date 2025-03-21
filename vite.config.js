import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  base: "/calm-pairs/",
  server: {
    open: true,
    port: 3001,
  },
});
