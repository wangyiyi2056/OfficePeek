import { ref, onUnmounted } from 'vue'

export function useFileViewer() {
  const fileUrl = ref('')

  const handleFileChange = (file: File) => {
    // Clean up previous URL to prevent memory leaks
    if (fileUrl.value) {
      URL.revokeObjectURL(fileUrl.value)
    }
    fileUrl.value = URL.createObjectURL(file)
  }

  // Clean up object URL when component unmounts
  onUnmounted(() => {
    if (fileUrl.value) {
      URL.revokeObjectURL(fileUrl.value)
    }
  })

  return {
    fileUrl,
    handleFileChange
  }
}