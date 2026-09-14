import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  base: "https://landing-pages-one-kappa.vercel.app/",
  publicDir: resolve(__dirname, "public"),
  plugins: [vue({ customElement: true })],

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  build: {
    outDir: resolve(__dirname, "wc"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "dia-do-cliente": "./entry-mes-do-cliente.ts",
        "top-bar": "./entry-top-bar.ts",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "shared-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]", // hash evita colisão, mas o ponto chave é isolar de path de origem
        format: "es",
      },
    },
  },

  define: {
    "process.env.NODE_ENV": '"production"',
  },

  cssCodeSplit: false,
});
