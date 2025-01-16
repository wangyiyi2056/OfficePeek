<script setup lang="ts">
  import type { UploadFile } from "element-plus";

  interface Props {
    accept: string;
    buttonText: string;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: "fileChange", file: File): void;
  }>();

  const handleChange = (uploadFile: UploadFile) => {
    if (uploadFile.raw) {
      emit("fileChange", uploadFile.raw);
    }
  };
</script>

<template>
  <el-upload
    class="upload-demo"
    action="#"
    :auto-upload="false"
    :show-file-list="false"
    :accept="accept"
    @change="handleChange"
  >
    <el-button type="primary">{{ buttonText }}</el-button>
  </el-upload>
</template>
