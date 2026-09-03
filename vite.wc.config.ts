import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

const componentName = 'lp-ddc'

export default defineConfig({
  plugins: [vue({ customElement: true })],

  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },

  build: {
    outDir: 'wc/' + componentName,
    emptyOutDir: true,
    lib: {
      entry: './wc-entry.ts',
      name: 'DiaDoCliente',
      fileName: componentName
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
})