import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ExcelViewer from '../views/ExcelViewer.vue'
import WordViewer from '../views/WordViewer.vue'
import PdfViewer from '../views/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/excel',
      component: ExcelViewer
    },
    {
      path: '/word',
      component: WordViewer
    },
    {
      path: '/pdf',
      component: PdfViewer
    },
    {
      path: '/ppt',
      name: 'PptViewer',
      component: () => import('../views/PptViewer.vue')
    }
  ]
})

export default router