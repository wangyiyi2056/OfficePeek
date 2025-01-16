import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@vue-office/pdf': '@vue-office/pdf',
      '@vue-office/docx': '@vue-office/docx',
      '@vue-office/excel': '@vue-office/excel'
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      '@vue-office/pdf',
      '@vue-office/docx',
      '@vue-office/excel'
    ]
  }
})