<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  accept: string
  buttonText: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'fileChange', event: Event): void
}>()

const handleChange = (event: Event) => {
  emit('fileChange', event)
}
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