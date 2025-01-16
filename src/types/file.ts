export interface FileViewerProps {
  src: string
}

export const ACCEPTED_FILES = {
  EXCEL: '.xlsx,.xls',
  WORD: '.docx,.doc',
  PDF: '.pdf',
  PPT: '.pptx,.ppt'
} as const

export type AcceptedFiles = typeof ACCEPTED_FILES