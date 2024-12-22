import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@vue-office/pdf': '@vue-office/pdf/lib',
      '@vue-office/docx': '@vue-office/docx/lib',
      '@vue-office/excel': '@vue-office/excel/lib'
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      '@vue-office/pdf/lib',
      '@vue-office/docx/lib',
      '@vue-office/excel/lib'
    ]
  }
})