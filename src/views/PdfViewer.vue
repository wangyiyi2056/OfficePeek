<script setup lang="ts">
import { VueOfficePdf } from '@vue-office/pdf/lib'
import '@vue-office/pdf/lib/index.css'
import { useFileViewer } from '../composables/useFileViewer'
import FileUploader from '../components/FileUploader.vue'
import { ACCEPTED_FILES } from '../types/file'
import '../styles/viewer.css'

const { fileUrl, handleFileChange } = useFileViewer()
</script>

<template>
  <div class="viewer-wrapper">
    <FileUploader
      :accept="ACCEPTED_FILES.PDF"
      button-text="选择 PDF 文件"
      @file-change="handleFileChange"
    />
    <div v-if="fileUrl" class="viewer-container">
      <vue-office-pdf :src="fileUrl" />
    </div>
  </div>
</template>