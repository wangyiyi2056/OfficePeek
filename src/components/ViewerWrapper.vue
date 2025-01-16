<script setup lang="ts">
  import { defineAsyncComponent, ref } from "vue";

  const ExcelViewer = defineAsyncComponent(
    () => import("@vue-office/excel/dist/style.css")
  );
  const WordViewer = defineAsyncComponent(
    () => import("@vue-office/docx/dist/style.css")
  );
  const PdfViewer = defineAsyncComponent(
    () => import("@vue-office/pdf/dist/style.css")
  );

  const viewers = {
    excel: ExcelViewer,
    word: WordViewer,
    pdf: PdfViewer,
  };

  const props = defineProps<{
    type: keyof typeof viewers;
    src: string;
  }>();

  const isLoading = ref(true);
  const handleLoad = () => {
    isLoading.value = false;
  };
</script>

<template>
  <div class="viewer-container">
    <el-skeleton :loading="isLoading" animated>
      <template #template>
        <div style="height: 600px">
          <el-skeleton-item variant="text" style="width: 100%; height: 100%" />
        </div>
      </template>
      <template #default>
        <component :is="viewers[type]" :src="src" @load="handleLoad" />
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped>
  .viewer-container {
    margin-top: 20px;
    height: 600px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>
