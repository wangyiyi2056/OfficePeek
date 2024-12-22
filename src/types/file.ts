export interface FileViewerProps {
  src: string
}

export const ACCEPTED_FILES = {
  EXCEL: '.xlsx,.xls',
  WORD: '.docx,.doc',
  PDF: '.pdf'
} as const