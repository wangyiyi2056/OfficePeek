<script setup lang="ts">
  import VueOfficePptx from "@vue-office/pptx";
  import { useFileViewer } from "../composables/useFileViewer";
  import FileUploader from "../components/FileUploader.vue";
  import { ACCEPTED_FILES } from "../types/file.ts";
  import "../styles/viewer.css";

  const { fileUrl, handleFileChange } = useFileViewer();
</script>

<template>
  <div class="viewer-wrapper">
    <FileUploader
      :accept="ACCEPTED_FILES.PPT"
      button-text="选择 PPT 文件"
      @file-change="handleFileChange"
    />
    <div v-if="fileUrl" class="viewer-container">
      <vue-office-pptx :src="fileUrl" />
    </div>
  </div>
</template>
