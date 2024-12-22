<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="home">
    <h1>在线文档预览系统</h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card @click="router.push('/excel')">
          <h2>Excel 预览</h2>
          <p>支持在线预览和编辑 Excel 文件</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card @click="router.push('/word')">
          <h2>Word 预览</h2>
          <p>支持在线预览 Word 文档</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card @click="router.push('/pdf')">
          <h2>PDF 预览</h2>
          <p>支持在线预览 PDF 文件</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}
.el-card {
  cursor: pointer;
  margin: 20px 0;
  transition: transform 0.3s;
}
.el-card:hover {
  transform: translateY(-5px);
}
h2 {
  margin: 10px 0;
}
</style>