import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/core'),
      '@store': path.resolve(__dirname, './src/store'),
      '@http': path.resolve(__dirname, './src/http'),
      '@layouts': path.resolve(__dirname, './src/ui/layouts'),
      '@views': path.resolve(__dirname, './src/ui/views'),
      '@components': path.resolve(__dirname, './src/ui/components'),
    },
  },
})
