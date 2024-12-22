<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/excel">Excel 预览</el-menu-item>
        <el-menu-item index="/word">Word 预览</el-menu-item>
        <el-menu-item index="/pdf">PDF 预览</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style>
.el-header {
  padding: 0;
}
.el-main {
  padding: 20px;
}
</style>