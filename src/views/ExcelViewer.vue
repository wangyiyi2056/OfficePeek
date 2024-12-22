<script setup lang="ts">
import { VueOfficeExcel } from '@vue-office/excel/lib'
import '@vue-office/excel/lib/index.css'
import { useFileViewer } from '../composables/useFileViewer'
import FileUploader from '../components/FileUploader.vue'
import { ACCEPTED_FILES } from '../types/file'
import '../styles/viewer.css'

const { fileUrl, handleFileChange } = useFileViewer()
</script>

<template>
  <div class="viewer-wrapper">
    <FileUploader
      :accept="ACCEPTED_FILES.EXCEL"
      button-text="选择 Excel 文件"
      @file-change="handleFileChange"
    />
    <div v-if="fileUrl" class="viewer-container">
      <vue-office-excel :src="fileUrl" />
    </div>
  </div>
</template>