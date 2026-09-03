import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const componentName = 'dia-do-cliente'

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    outDir: 'wc/' + componentName,
    emptyOutDir: true,
    lib: {
      entry: './wc-entry.ts',
      name: 'MeuWidget',
      fileName: componentName
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
})