import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '', // a empty string
  base: './', //process.env.NODE_ENV === 'production' ? '/vue-demo/' : '/',
  plugins: [vue()],
})
