/** @type {import('vite').UserConfig} */

const autoprefixer = require("autoprefixer");

const purgeConfig = {
  content: ["./**/*.html"],
  css: ["./src/style/dsfr.min.css"],
};

const purgecss = require("@fullhuman/postcss-purgecss")(purgeConfig);
const plugins = [];

plugins.push(purgecss);
plugins.push(autoprefixer());
plugins.push(require("cssnano"));

module.exports = {
  root: ".",
  publicDir: false,
  base: "/",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins,
    },
  },
};
