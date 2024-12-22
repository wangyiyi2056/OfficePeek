<script setup lang="ts">
import { VueOfficeDocx } from '@vue-office/docx/lib'
import '@vue-office/docx/lib/index.css'
import { useFileViewer } from '../composables/useFileViewer'
import FileUploader from '../components/FileUploader.vue'
import { ACCEPTED_FILES } from '../types/file'
import '../styles/viewer.css'

const { fileUrl, handleFileChange } = useFileViewer()
</script>

<template>
  <div class="viewer-wrapper">
    <FileUploader
      :accept="ACCEPTED_FILES.WORD"
      button-text="选择 Word 文件"
      @file-change="handleFileChange"
    />
    <div v-if="fileUrl" class="viewer-container">
      <vue-office-docx :src="fileUrl" />
    </div>
  </div>
</template>