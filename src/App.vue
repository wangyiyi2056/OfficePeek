<script setup lang="ts">
  import { useRouter, useRoute } from "vue-router";
  const router = useRouter();
  const route = useRoute();
</script>

<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" router :default-active="route.path">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/excel">Excel 预览</el-menu-item>
        <el-menu-item index="/word">Word 预览</el-menu-item>
        <el-menu-item index="/pdf">PDF 预览</el-menu-item>
        <el-menu-item index="/ppt">PPT 预览</el-menu-item>
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
