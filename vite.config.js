import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


function getSystemPath() {
  const dirPath = path.resolve(__dirname);
  return (dirPath.startsWith('C')) ? `./src/styles/variables.scss` : path.resolve(__dirname, 'src', 'styles', 'variables.scss');
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${getSystemPath()}";`
      }
    }
  }
})
