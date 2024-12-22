import { ref, onUnmounted } from 'vue'

export function useFileViewer() {
  const fileUrl = ref('')

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (target.files?.length) {
      // Clean up previous URL to prevent memory leaks
      if (fileUrl.value) {
        URL.revokeObjectURL(fileUrl.value)
      }
      const file = target.files[0]
      fileUrl.value = URL.createObjectURL(file)
    }
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